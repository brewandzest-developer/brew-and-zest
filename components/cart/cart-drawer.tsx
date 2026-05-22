"use client";

import Image from "next/image";

import { X, Trash2 } from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { useCartStore } from "../../store/cart-store";
import { useUIStore } from "../../store/ui-store";

import type {
    CartItem,
    CartStore,
  } from "../../store/cart-store";

export default function CartDrawer() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCartStore((state: CartStore) => state);

  const {
    isCartOpen,
    closeCart,
  } = useUIStore((state) => state);

  const subtotal = cart.reduce(
    (acc: number, item: CartItem) =>
      acc + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 99 : 0;

  const total = subtotal + shipping;

  return (
    <AnimatePresence>

      {isCartOpen && (
        <>

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col border-l border-[#E6D7C8] bg-[#FEF4E4]"
          >

            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#E6D7C8] p-6">

              <div>
                <h2 className="text-3xl font-bold">
                  Your Cart
                </h2>

                <p className="mt-1 text-sm text-[#6B5E5B]">
                  {cart.length} items added
                </p>
              </div>

              <button
                onClick={closeCart}
                className="transition hover:rotate-90"
              >
                <X />
              </button>

            </div>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto p-6">

              {cart.length === 0 ? (

                <div className="flex h-full flex-col items-center justify-center text-center">

                  <div className="mb-6 text-7xl">
                    ☕
                  </div>

                  <h3 className="mb-3 text-3xl font-bold">
                    Your cart is empty
                  </h3>

                  <p className="max-w-xs text-[#6B5E5B]">
                    Explore our specialty coffee collection and discover your next favorite brew.
                  </p>

                </div>

              ) : (

                <div className="space-y-6">

                  {cart.map((item: CartItem) => (

                    <motion.div
                      key={item.id}
                      layout
                      className="flex gap-4 rounded-3xl border border-[#E6D7C8] bg-white/50 p-4 backdrop-blur-sm"
                    >

                      {/* Image */}
                      <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-linear-to-br from-[#7B4E4C] to-[#161414]">

                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                        />

                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col">

                        <div className="flex items-start justify-between">

                          <div>
                            <h3 className="font-semibold">
                              {item.name}
                            </h3>

                            <p className="mt-1 text-sm text-[#6B5E5B]">
                              ₹{item.price}
                            </p>
                          </div>

                          <button
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                            className="text-[#6B5E5B] transition hover:text-red-500"
                          >
                            <Trash2 size={18} />
                          </button>

                        </div>

                        {/* Quantity */}
                        <div className="mt-auto flex items-center justify-between pt-4">

                          <div className="flex items-center gap-3 rounded-full border border-[#E6D7C8] px-3 py-2">

                            <button
                              onClick={() =>
                                decreaseQuantity(item.id)
                              }
                              className="text-lg"
                            >
                              -
                            </button>

                            <span className="min-w-5 text-center text-sm">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                increaseQuantity(item.id)
                              }
                              className="text-lg"
                            >
                              +
                            </button>

                          </div>

                          <div className="font-semibold">
                            ₹{item.price * item.quantity}
                          </div>

                        </div>

                      </div>

                    </motion.div>

                  ))}

                </div>

              )}

            </div>

            {/* Footer */}
            {cart.length > 0 && (

              <div className="border-t border-[#E6D7C8] bg-[#FEF4E4] p-6">

                <div className="mb-4 space-y-3">

                  <div className="flex items-center justify-between text-sm text-[#6B5E5B]">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-[#6B5E5B]">
                    <span>Shipping</span>
                    <span>₹{shipping}</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#E6D7C8] pt-3 text-lg font-semibold">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>

                </div>

                <a
  href="/checkout"
  className="block w-full rounded-full bg-[#161414] py-4 text-center text-white transition hover:opacity-90"
>
  Proceed To Checkout
</a>

              </div>

            )}

          </motion.div>

        </>
      )}

    </AnimatePresence>
  );
}