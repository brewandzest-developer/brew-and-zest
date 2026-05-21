import Container from "../layout/container";
import ProductCard from "../product/product-card";

import { products } from "@/constants/products";

export default function ProductShowcase() {
  return (
    <section className="py-24">
      <Container>
        
        {/* Heading */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[4px] text-[#7B4E4C]">
              Explore Collection
            </p>

            <h2 className="text-5xl font-bold">
              Featured Coffee
            </h2>
          </div>

          <button className="hidden md:block">
            View All
          </button>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
            key={product.id}
            slug={product.slug}
            name={product.name}
            subtitle={product.subtitle}
            price={product.price}
            image={product.image}
          />
          ))}
        </div>
      </Container>
    </section>
  );
}