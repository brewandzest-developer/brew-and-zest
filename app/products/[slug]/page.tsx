"use client";

import { useState } from "react";

import Image from "next/image";

import { notFound, useParams } from "next/navigation";

import Container from "@/components/layout/container";

import Button from "@/components/ui/button";

import { products } from "@/data/products";

import { useCartStore } from "@/store/cart-store";

export default function ProductPage() {
  const params = useParams();

  const slug = params.slug as string;

  const addItem = useCartStore((state) => state.addItem);

  const product = products.find((item) => item.slug === slug);

  const hasSizes = !!product?.sizes;

  const [selectedSize, setSelectedSize] = useState(
    hasSizes
      ? product!.sizes![0]
      : {
          label: "1KG",
          price: product?.price || 0,
        }
  );

  if (!product) {
    return notFound();
  }

  const relatedProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  return (
    <main className="bg-[#F6F0E4] pb-28 pt-10">
      <Container>
        {/* Main Product */}
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="sticky top-28 h-fit">
            <div className="relative aspect-square overflow-hidden rounded-[40px] bg-[radial-gradient(circle_at_top_left,#8B5A58,#3B2625_55%,#161414)] p-10">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-16"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 uppercase tracking-[0.35em] text-[#8A6A5A]">
              {product.category}
            </p>

            <h1 className="text-6xl font-semibold leading-tight text-[#161414]">
              {product.name}
            </h1>

            <p className="mt-6 text-xl leading-relaxed text-[#6E625C]">
              {product.description}
            </p>

            {/* Price */}
            <div className="mt-10">
              <div className="text-4xl font-semibold text-[#161414]">
                ₹{selectedSize.price}
              </div>

              {/* Default Packaging */}
              {!hasSizes && (
                <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[#8A6A5A]">
                  Size: 1KG
                </p>
              )}
            </div>

            {/* Size Selector */}
            {hasSizes && (
              <div className="mt-10">
                <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#8A6A5A]">
                  Select Size
                </p>

                <div className="flex flex-wrap gap-4">
                  {product.sizes?.map((size) => (
                    <button
                      key={size.label}
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-full border px-6 py-3 text-lg transition ${
                        selectedSize.label === size.label
                          ? "border-[#161414] bg-[#161414] text-white"
                          : "border-[#DED3C5] bg-white text-[#161414]"
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tasting Notes */}
            <div className="mt-12">
              <h3 className="text-sm uppercase tracking-[0.3em] text-[#8A6A5A]">
                Tasting Notes
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {product.tastingNotes.map((note) => (
                  <span
                    key={note}
                    className="rounded-full border border-[#DED3C5] px-5 py-2 text-sm text-[#161414]"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#8A6A5A]">
                  Origin
                </p>

                <p className="mt-2 text-lg text-[#161414]">{product.origin}</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#8A6A5A]">
                  Roast
                </p>

                <p className="mt-2 text-lg text-[#161414]">
                  {product.roastLevel}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#8A6A5A]">
                  Process
                </p>

                <p className="mt-2 text-lg text-[#161414]">{product.process}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-14 flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={() =>
                  addItem({
                    id: product.id,
                    slug: product.slug,
                    name: product.name,
                    image: product.image,
                    price: selectedSize.price,
                    selectedSize: selectedSize.label,
                  })
                }
              >
                Add To Cart
              </Button>

              <Button variant="secondary">Buy Now</Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-32">
          <div className="mb-12">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#8A6A5A]">
              More To Explore
            </p>

            <h2 className="text-5xl font-semibold text-[#161414]">
              Related Coffees
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {relatedProducts.map((item) => (
              <div key={item.id} className="rounded-4xl bg-white p-6">
                <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{item.name}</h3>

                    <p className="mt-2 text-[#6E625C]">{item.subtitle}</p>
                  </div>

                  <p className="text-xl font-semibold">
                    ₹{item.sizes?.[0]?.price || item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
