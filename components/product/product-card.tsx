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

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`}>

      <div className="group cursor-pointer">

        {/* Image */}
        <div className="relative h-70 overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_top_left,#8B5A58,#3B2625_55%,#161414)] md:h-85 lg:h-95">

          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-8 transition duration-500 group-hover:scale-105 md:p-10"
          />

        </div>

        {/* Content */}
        <div className="mt-4 flex items-start justify-between gap-4 md:mt-5">

          <div>

            <h3 className="text-xl font-semibold text-[#161414] md:text-2xl">
              {product.name}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-[#6E625C] md:text-base">
              {product.subtitle}
            </p>

          </div>

          <p className="whitespace-nowrap text-lg font-semibold text-[#161414] md:text-xl">
            ₹
            {product.sizes?.[0]?.price ||
              product.price}
          </p>

        </div>

      </div>

    </Link>
  );
}