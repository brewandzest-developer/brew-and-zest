import Link from "next/link";

import ProductCard from "@/components/product/product-card";
import { products } from "@/data/products";

export default function ProductShowcase() {
  return (
    <section className="px-6 py-24 md:px-16">
      <div className="mb-14 flex items-end justify-between">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#8A6A5A]">
            Explore Collection
          </p>

          <h2 className="text-5xl font-semibold text-[#161414]">
            Featured Coffee
          </h2>
        </div>

        <Link
          href="/shop"
          className="text-lg text-[#161414] transition hover:opacity-70"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 3).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}