"use client";

import Link from "next/link";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  return (
    <header className="border-b border-black/10 bg-[#F5EBDD]">

      <div className="mx-auto flex max-w-360 items-center justify-between px-10 py-8">

        {/* Logo */}
        <Link
          href="/"
          className="text-5xl font-bold tracking-tight"
        >
          Brew & Zest
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-10 text-lg">

          {navLinks.map(
            (
              link: {
                label: string;
                href: string;
              }
            ) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:opacity-60"
              >
                {link.label}
              </Link>
            )
          )}

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-8 text-lg">

          <button className="transition hover:opacity-60">
            Search
          </button>

          <button className="transition hover:opacity-60">
            Cart
          </button>

        </div>

      </div>

    </header>
  );
}