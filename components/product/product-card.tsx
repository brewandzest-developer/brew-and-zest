"use client";

import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  image: string;
  price?: number;
  sizes?: {
    label: string;
    price: number;
  }[];
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="group cursor-pointer">
        <div className="relative h-85 overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_top_left,#8B5A58,#3B2625_55%,#161414)]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-[#161414]">
              {product.name}
            </h3>

            <p className="mt-2 text-[#6E625C]">{product.subtitle}</p>
          </div>

          <p className="text-xl font-semibold text-[#161414] whitespace-nowrap">
            ₹{product.sizes?.[0]?.price || product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}
