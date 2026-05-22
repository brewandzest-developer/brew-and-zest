"use client";

import Image from "next/image";

import {
  CartItem,
  useCartStore,
} from "@/store/cart-store";

export default function OrderSummary() {
  const {
    items,
    clearCart,
  } = useCartStore();

  const subtotal = items.reduce(
    (
      acc: number,
      item: CartItem
    ) =>
      acc +
      item.price * (item.quantity || 1),
    0
  );

  const shipping = 0;

  const total = subtotal + shipping;

  const handlePayment = async () => {
    try {
      const response = await fetch(
        "/api/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            amount: total,
          }),
        }
      );

      const data = await response.json();

      const options = {
        key:
          process.env
            .NEXT_PUBLIC_RAZORPAY_KEY_ID,

        amount: data.amount,

        currency: data.currency,

        name: "Brew & Zest",

        description:
          "Premium Coffee Purchase",

        order_id: data.id,

        handler: async (
          response: {
            razorpay_order_id: string;
            razorpay_payment_id: string;
            razorpay_signature: string;
          }
        ) => {
          const verifyResponse =
            await fetch(
              "/api/verify-payment",
              {
                method: "POST",
                headers: {
                  "Content-Type":
                    "application/json",
                },
                body: JSON.stringify(
                  response
                ),
              }
            );

          const verifyData =
            await verifyResponse.json();

          if (verifyData.success) {
            clearCart();

            window.location.href =
              "/payment-success";
          } else {
            window.location.href =
              "/payment-failed";
          }
        },

        theme: {
          color: "#161414",
        },
      };

      const razorpay = new (
        window as typeof window & {
          Razorpay: new (
            options: Record<string, unknown>
          ) => {
            open: () => void;
          };
        }
      ).Razorpay(options);

      razorpay.open();

    } catch (error) {

      console.error(error);

      alert("Payment failed");

    }
  };

  return (
    <div className="rounded-4xl border border-black/10 bg-white p-8">

      <h2 className="text-4xl font-bold">
        Order Summary
      </h2>

      {/* Items */}
      <div className="mt-10 space-y-5">

        {items.map((item: CartItem) => (

          <div
            key={item.id}
            className="flex items-center gap-4 rounded-3xl bg-[#f8f4ee] p-4"
          >

            <div className="relative h-20 w-20 overflow-hidden rounded-2xl">

              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />

            </div>

            <div className="flex-1">

              <h3 className="text-lg font-semibold">
                {item.name}
              </h3>

              <p className="mt-1 text-black/60">
                Qty: {item.quantity || 1}
              </p>

            </div>

            <p className="text-lg font-semibold">

              ₹
              {item.price *
                (item.quantity || 1)}

            </p>

          </div>

        ))}

      </div>

      {/* Pricing */}
      <div className="mt-10 space-y-4 border-t border-black/10 pt-6">

        <div className="flex items-center justify-between text-lg">

          <p className="text-black/60">
            Subtotal
          </p>

          <p>
            ₹{subtotal}
          </p>

        </div>

        <div className="flex items-center justify-between text-lg">

          <p className="text-black/60">
            Shipping
          </p>

          <p>
            Free
          </p>

        </div>

        <div className="flex items-center justify-between border-t border-black/10 pt-4 text-2xl font-bold">

          <p>Total</p>

          <p>
            ₹{total}
          </p>

        </div>

      </div>

      {/* Button */}
      <button
        onClick={handlePayment}
        className="mt-10 w-full rounded-full bg-[#161414] py-5 text-lg text-white transition hover:opacity-90"
      >
        Continue To Payment
      </button>

    </div>
  );
}