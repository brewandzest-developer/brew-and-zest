"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useCartStore } from "@/store/cart-store";
import { useUIStore } from "@/store/ui-store";

export default function CartDrawer() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  const {
    isCartOpen,
    closeCart,
  } = useUIStore();

  const total = cart.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            onClick={closeCart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col border-l border-[#E6D7C8] bg-[#FEF4E4] p-6"
          >
            
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold">
                Your Cart
              </h2>

              <button onClick={closeCart}>
                <X />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col gap-6">
                {cart.length === 0 && (
                  <p>
                    Your cart is empty.
                  </p>
                )}

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4"
                  >
                    
                    {/* Image */}
                    <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-gradient-to-br from-[#7B4E4C] to-[#161414]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col">
                      <h3 className="font-semibold">
                        {item.name}
                      </h3>

                      <p className="text-sm text-[#6B5E5B]">
                        ₹{item.price}
                      </p>

                      {/* Quantity */}
                      <div className="mt-3 flex items-center gap-3">
                        
                        <button
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-full border"
                        >
                          -
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-full border"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-[#E6D7C8] pt-6">
              
              <div className="mb-4 flex items-center justify-between text-lg font-semibold">
                <span>Total</span>

                <span>
                  ₹{total}
                </span>
              </div>

              <button className="w-full rounded-full bg-[#161414] py-4 text-white transition hover:opacity-90">
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}