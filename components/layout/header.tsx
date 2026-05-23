"use client";

import Link from "next/link";

import { useCartStore } from "@/store/cart-store";

export default function Header() {
  const openCart = useCartStore((state) => state.openCart);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F6F0E4]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-400 items-center justify-between px-6 py-6 md:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="text-4xl font-semibold tracking-tight text-[#161414]"
        >
          Brew & Zest
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-14 md:flex">
          <Link
            href="/"
            className="text-lg text-[#161414] transition hover:opacity-60"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="text-lg text-[#161414] transition hover:opacity-60"
          >
            Shop
          </Link>

          <Link
            href="/about"
            className="text-lg text-[#161414] transition hover:opacity-60"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-lg text-[#161414] transition hover:opacity-60"
          >
            Contact
          </Link>
        </nav>

        {/* Cart */}
        <button
          onClick={openCart}
          className="group relative flex items-center gap-3 rounded-full border border-[#161414]/15 bg-white/70 px-5 py-2.5 text-sm font-medium tracking-wide text-[#161414] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-px hover:border-[#161414]/30 hover:bg-white hover:shadow-lg"
        >
          <span className="h-2 w-2 rounded-full bg-[#8A6A5A] transition-all duration-300 group-hover:scale-125" />

          <span className="uppercase tracking-[0.18em]">Cart</span>
        </button>
      </div>
    </header>
  );
}
