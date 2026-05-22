"use client";

import Container from "./container";
import MobileMenu from "./mobile-menu";

import { useCartStore } from "../../store/cart-store";
import { useUIStore } from "@/store/ui-store";

export default function Header() {
    const cart = useCartStore(
        (state) => state.cart
      );
      
      const openCart = useUIStore(
        (state) => state.openCart
      );
      
      const totalItems = cart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
  return (
    <header className="sticky top-0 z-50 border-b border-[#E6D7C8] bg-[#FEF4E4]/80 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <h1 className="text-3xl font-bold tracking-tight">
            Brew & Zest
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#"
              className="text-sm transition hover:text-[#7B4E4C]"
            >
              Home
            </a>

            <a
              href="#"
              className="text-sm transition hover:text-[#7B4E4C]"
            >
              Shop
            </a>

            <a
              href="#"
              className="text-sm transition hover:text-[#7B4E4C]"
            >
              About
            </a>

            <a
              href="#"
              className="text-sm transition hover:text-[#7B4E4C]"
            >
              Contact
            </a>
            <a href="/shop">
                Shop
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">

  <button className="hidden md:block">
    Search
  </button>

  <button
    onClick={openCart}
    className="relative"
  >
    Cart

    {totalItems > 0 && (
      <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#161414] text-xs text-white">
        {totalItems}
      </span>
    )}
  </button>

  <MobileMenu />
</div>
        </div>
      </Container>
    </header>
  );
}