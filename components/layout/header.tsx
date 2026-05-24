"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useCartStore } from "@/store/cart-store";

export default function Header() {
  const openCart = useCartStore(
    (state) => state.openCart
  );

  const [isMobileNavOpen, setIsMobileNavOpen] =
    useState(false);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileNavOpen]);

  const closeMobileNav = () =>
    setIsMobileNavOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F6F0E4]/90 backdrop-blur-xl">

        <div className="mx-auto flex max-w-400 items-center justify-between px-5 py-4 md:px-12 md:py-6">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobileNav}
            className="text-[32px] font-semibold tracking-tight text-[#161414] md:text-5xl"
          >
            Brew & Zest
          </Link>

          {/* Desktop Navigation */}
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

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Cart Button */}
            <button
              onClick={() => {
                openCart();
                closeMobileNav();
              }}
              className="group relative flex items-center gap-2 rounded-full border border-[#161414]/15 bg-white/70 px-4 py-2 text-xs font-medium tracking-wide text-[#161414] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-px hover:border-[#161414]/30 hover:bg-white hover:shadow-lg md:gap-3 md:px-5 md:py-2.5 md:text-sm"
            >

              <span className="h-2 w-2 rounded-full bg-[#8A6A5A] transition-all duration-300 group-hover:scale-125" />

              <span className="uppercase tracking-[0.18em]">
                Cart
              </span>

            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() =>
                setIsMobileNavOpen((prev) => !prev)
              }
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#161414]/15 bg-white/70 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#161414]/30 hover:bg-white hover:shadow-lg md:hidden"
            >

              <div className="relative h-4 w-5">

                <span
                  className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-[#161414] transition-all duration-300 ${
                    isMobileNavOpen
                      ? "translate-y-1.75 rotate-45"
                      : ""
                  }`}
                />

                <span
                  className={`absolute left-0 top-1.75 h-0.5 w-full rounded-full bg-[#161414] transition-all duration-300 ${
                    isMobileNavOpen
                      ? "opacity-0"
                      : "opacity-100"
                  }`}
                />

                <span
                  className={`absolute left-0 top-3.5 h-0.5 w-full rounded-full bg-[#161414] transition-all duration-300 ${
                    isMobileNavOpen
                      ? "-translate-y-1.75 -rotate-45"
                      : ""
                  }`}
                />

              </div>

            </button>

          </div>

        </div>

      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-[#F6F0E4]/98 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          isMobileNavOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >

        <div className="flex h-full flex-col items-center justify-center gap-10 px-6">

          <Link
            href="/"
            onClick={closeMobileNav}
            className="text-4xl font-medium text-[#161414]"
          >
            Home
          </Link>

          <Link
            href="/shop"
            onClick={closeMobileNav}
            className="text-4xl font-medium text-[#161414]"
          >
            Shop
          </Link>

          <Link
            href="/about"
            onClick={closeMobileNav}
            className="text-4xl font-medium text-[#161414]"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={closeMobileNav}
            className="text-4xl font-medium text-[#161414]"
          >
            Contact
          </Link>

        </div>

      </div>
    </>
  );
}