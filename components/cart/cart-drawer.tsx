"use client";

import Image from "next/image";

import { X } from "lucide-react";

import {
  CartItem,
  useCartStore,
} from "@/store/cart-store";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
  } = useCartStore();

  const totalPrice = items.reduce(
    (
      acc: number,
      item: CartItem
    ) =>
      acc +
      item.price * (item.quantity || 1),
    0
  );

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-100">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 flex h-full w-full max-w-125 flex-col bg-[#f8f1e7] shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">

          <h2 className="text-2xl font-semibold">
            Your Cart
          </h2>

          <button
            onClick={closeCart}
            className="transition hover:opacity-60"
          >
            <X size={28} />
          </button>

        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">

          {items.length === 0 ? (

            <div className="flex h-full items-center justify-center text-center">

              <div>

                <p className="text-2xl font-semibold">
                  Your cart is empty
                </p>

                <p className="mt-3 text-black/60">
                  Add premium coffee to begin your journey.
                </p>

              </div>

            </div>

          ) : (

            <div className="space-y-5">

              {items.map((item: CartItem) => (

                <div
                  key={item.id}
                  className="flex gap-4 rounded-3xl border border-black/10 bg-white p-4"
                >

                  <div className="relative h-24 w-24 overflow-hidden rounded-2xl">

                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />

                  </div>

                  <div className="flex flex-1 flex-col justify-between">

                    <div>

                      <h3 className="text-lg font-semibold">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-black/60">
                        Qty: {item.quantity || 1}
                      </p>

                    </div>

                    <div className="flex items-center justify-between">

                      <p className="text-lg font-semibold">
                        ₹
                        {item.price *
                          (item.quantity || 1)}
                      </p>

                      <button
                        onClick={() =>
                          removeItem(item.id)
                        }
                        className="text-sm text-red-500 transition hover:opacity-60"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

        {/* Footer */}
        {items.length > 0 && (

          <div className="border-t border-black/10 bg-white px-6 py-6">

            <div className="mb-5 flex items-center justify-between">

              <p className="text-lg text-black/60">
                Total
              </p>

              <p className="text-3xl font-bold">
                ₹{totalPrice}
              </p>

            </div>

            <a
              href="/checkout"
              className="flex w-full items-center justify-center rounded-full bg-[#161414] py-4 text-lg text-white transition hover:opacity-90"
            >
              Proceed To Checkout
            </a>

          </div>

        )}

      </div>

    </div>
  );
}