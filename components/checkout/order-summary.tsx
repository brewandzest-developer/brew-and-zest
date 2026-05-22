"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

import {
  CartItem,
  CartStore,
  useCartStore,
} from "@/store/cart-store";

declare global {

  interface Window {

    Razorpay: new (
      options: RazorpayOptions
    ) => {
      open: () => void;
    };

  }

}

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface RazorpayOptions {
  key: string | undefined;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;

  handler: (
    response: RazorpayResponse
  ) => void;

  prefill: {
    name: string;
    email: string;
    contact: string;
  };

  theme: {
    color: string;
  };

  modal: {
    ondismiss: () => void;
  };
}

export default function OrderSummary() {

  const router = useRouter();

  const cart = useCartStore(
    (state: CartStore) =>
      state.cart
  );

  const clearCart =
    useCartStore(
      (state: CartStore) =>
        state.clearCart
    );

  const [isLoading, setIsLoading] =
    useState(false);

  const subtotal =
    cart.reduce(
      (
        acc: number,
        item: CartItem
      ) =>
        acc +
        item.price *
          item.quantity,
      0
    );

  const shipping =
    subtotal > 0 ? 99 : 0;

  const total =
    subtotal + shipping;

  const handlePayment =
    async () => {

      try {

        setIsLoading(true);

        const response =
          await fetch(
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

        const order =
          await response.json();

        const options: RazorpayOptions =
          {

            key:
              process.env
                .NEXT_PUBLIC_RAZORPAY_KEY_ID,

            amount:
              order.amount,

            currency:
              order.currency,

            name:
              "Brew & Zest",

            description:
              "Coffee Order Payment",

            order_id:
              order.id,

            handler:
              async function (
                response: RazorpayResponse
              ) {

                try {

                  const verifyResponse =
                    await fetch(
                      "/api/verify-payment",
                      {
                        method:
                          "POST",

                        headers:
                          {
                            "Content-Type":
                              "application/json",
                          },

                        body:
                          JSON.stringify(
                            response
                          ),
                      }
                    );

                  const data =
                    await verifyResponse.json();

                  if (
                    data.success
                  ) {

                    clearCart();

                    localStorage.removeItem(
                      "cart-storage"
                    );

                    router.push(
                      "/payment-success"
                    );

                  } else {

                    router.push(
                      "/payment-failed"
                    );

                  }

                } catch (
                  error
                ) {

                  console.error(
                    error
                  );

                  router.push(
                    "/payment-failed"
                  );

                }

              },

            prefill: {

              name:
                "Brew & Zest",

              email:
                "hello@brewandzest.com",

              contact:
                "9460012223",

            },

            theme: {

              color:
                "#161414",

            },

            modal: {

              ondismiss:
                function () {

                  router.push(
                    "/payment-failed"
                  );

                },

            },

          };

        const razorpay =
          new window.Razorpay(
            options
          );

        razorpay.open();

      } catch (error) {

        console.error(error);

        router.push(
          "/payment-failed"
        );

      } finally {

        setIsLoading(false);

      }

    };

  return (

    <aside className="sticky top-10 h-fit rounded-4xl border border-[#E6D7C8] bg-white p-8">

      <h2 className="mb-8 text-3xl font-bold">

        Order Summary

      </h2>

      <div className="space-y-6">

        {cart.map(
          (
            item: CartItem
          ) => (

            <div
              key={item.id}
              className="flex gap-4"
            >

              <div className="relative h-20 w-20 overflow-hidden rounded-3xl bg-linear-to-br from-[#7B4E4C] to-[#161414]">

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-2"
                />

              </div>

              <div className="flex flex-1 flex-col justify-center">

                <h3 className="font-semibold">

                  {item.name}

                </h3>

                <p className="mt-1 text-sm text-[#6B5E5B]">

                  Qty:
                  {" "}
                  {item.quantity}

                </p>

              </div>

              <div className="font-semibold">

                ₹
                {item.price *
                  item.quantity}

              </div>

            </div>

          )
        )}

      </div>

      <div className="mt-10 space-y-4 border-t border-[#E6D7C8] pt-6">

        <div className="flex items-center justify-between text-[#6B5E5B]">

          <span>
            Subtotal
          </span>

          <span>
            ₹{subtotal}
          </span>

        </div>

        <div className="flex items-center justify-between text-[#6B5E5B]">

          <span>
            Shipping
          </span>

          <span>
            ₹{shipping}
          </span>

        </div>

        <div className="flex items-center justify-between border-t border-[#E6D7C8] pt-4 text-xl font-semibold">

          <span>
            Total
          </span>

          <span>
            ₹{total}
          </span>

        </div>

      </div>

      <button
        onClick={
          handlePayment
        }
        disabled={
          isLoading
        }
        className="mt-8 w-full rounded-full bg-[#161414] py-4 text-white transition hover:opacity-90 disabled:opacity-50"
      >

        {isLoading
          ? "Processing..."
          : "Continue To Payment"}

      </button>

    </aside>

  );

}