"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-[#FEF4E4] p-6">
          
          {/* Top */}
          <div className="mb-16 flex items-center justify-between">
            <h2 className="text-3xl font-bold">
              Brew & Zest
            </h2>

            <button onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-8 text-3xl">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      )}
    </>
  );
}