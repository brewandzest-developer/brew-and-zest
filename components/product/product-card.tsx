"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProductCardProps {
    slug: string;
    name: string;
    subtitle: string;
    price: number;
    image: string;
  }

  export default function ProductCard({
    slug,
    name,
    subtitle,
    price,
    image,
  }: ProductCardProps) {
  return (
    <Link href={`/products/${slug}`}>
  <motion.div
    whileHover={{ y: -10 }}
    transition={{ duration: 0.3 }}
    className="group overflow-hidden rounded-[32px] border border-[#E6D7C8] bg-white/40 backdrop-blur-md"
  >
    
    {/* Product Image */}
    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#7B4E4C] to-[#161414] p-8">
      
      <Image
        src={image}
        alt={name}
        fill
        className="object-contain p-10 transition-transform duration-500 group-hover:scale-105"
      />

      {/* Glow */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
    </div>

    {/* Content */}
    <div className="p-6">
      <div className="mb-4">
        <h3 className="mb-2 text-2xl font-semibold">
          {name}
        </h3>

        <p className="text-sm text-[#6B5E5B]">
          {subtitle}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold">
          ₹{price}
        </span>

        <button className="rounded-full bg-[#161414] px-5 py-2 text-sm text-white transition hover:scale-105">
          Add
        </button>
      </div>
    </div>
  </motion.div>
</Link>
  );
}
