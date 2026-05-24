"use client";

import { useEffect } from "react";

import Image from "next/image";

import {
  CartItem,
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
  razorpay_payment_id: string;
}

interface RazorpayOptions {

  key: string | undefined;

  amount: number;

  currency: string;

  name: string;

  description: string;

  image?: string;

  handler: (
    response: RazorpayResponse
  ) => void;

  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };

  notes?: {
    brand?: string;
  };

  theme?: {
    color?: string;
  };

}

export default function OrderSummary() {

  const items = useCartStore(
    (state) => state.items
  );

  const total = items.reduce(
    (
      acc: number,
      item: CartItem
    ) =>
      acc +
      item.price *
        (item.quantity || 1),
    0
  );

  useEffect(() => {

    const script =
      document.createElement(
        "script"
      );

    script.src =
      "https://checkout.razorpay.com/v1/checkout.js";

    script.async = true;

    document.body.appendChild(
      script
    );

  }, []);

  return (

    <div className="rounded-4xl border border-[#E5D7C8] bg-white p-6 md:sticky md:top-28 md:p-10">

      <h2 className="text-4xl font-semibold text-[#161414] md:text-5xl">
        Order Summary
      </h2>

      {/* Cart Items */}
      <div className="mt-8 space-y-4">

        {items.length === 0 ? (

          <div className="rounded-3xl border border-dashed border-[#DED3C5] p-8 text-center text-[#6E625C]">

            Your cart is empty

          </div>

        ) : (

          items.map(
            (item: CartItem) => (

              <div
                key={`${item.id}-${item.selectedSize || "default"}`}
                className="flex items-center gap-4 rounded-3xl border border-[#E5D7C8] p-4"
              >

                <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_top_left,#8B5A58,#3B2625_55%,#161414)]">

                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-2"
                  />

                </div>

                <div className="flex-1">

                  <h3 className="text-lg font-semibold text-[#161414]">
                    {item.name}
                  </h3>

                  <div className="mt-1 flex items-center gap-2 text-sm text-[#6E625C]">

                    <span>
                      Qty:{" "}
                      {item.quantity || 1}
                    </span>

                    <span>
                      •
                    </span>

                    <span>
                      {item.selectedSize ||
                        "1KG"}
                    </span>

                  </div>

                </div>

                <p className="text-lg font-semibold text-[#161414]">

                  ₹
                  {item.price *
                    (item.quantity ||
                      1)}

                </p>

              </div>

            )
          )

        )}

      </div>

      {/* Pricing */}
      <div className="mt-8 border-t border-[#E5D7C8] pt-8">

        <div className="flex items-center justify-between text-lg text-[#6E625C]">

          <p>
            Subtotal
          </p>

          <p>
            ₹{total}
          </p>

        </div>

        <div className="mt-5 flex items-center justify-between text-lg text-[#6E625C]">

          <p>
            Shipping
          </p>

          <p>
            Free
          </p>

        </div>

        <div className="mt-6 flex items-center justify-between border-t border-[#E5D7C8] pt-6">

          <p className="text-2xl font-semibold text-[#161414]">
            Total
          </p>

          <p className="text-4xl font-bold text-[#161414]">
            ₹{total}
          </p>

        </div>

      </div>

      {/* Payment Button */}
      <button
        onClick={() => {

          if (total <= 0) {

            alert(
              "Your cart is empty"
            );

            return;

          }

          const options: RazorpayOptions =
            {

              key:
                process.env
                  .NEXT_PUBLIC_RAZORPAY_KEY_ID,

              amount:
                total * 100,

              currency:
                "INR",

              name:
                "Brew & Zest",

              description:
                "Premium Coffee Order",

              image:
                "/logo.png",

              handler:
                function (
                  response: RazorpayResponse
                ) {

                  alert(
                    `Payment Successful: ${response.razorpay_payment_id}`
                  );

                },

              prefill: {

                name: "",

                email: "",

                contact: "",

              },

              notes: {

                brand:
                  "Brew & Zest",

              },

              theme: {

                color:
                  "#161414",

              },

            };

          const razorpay =
            new window.Razorpay(
              options
            );

          razorpay.open();

        }}
        className="mt-10 w-full rounded-full bg-[#161414] py-5 text-lg text-white transition hover:opacity-90"
      >

        Continue To Payment

      </button>

    </div>

  );

}