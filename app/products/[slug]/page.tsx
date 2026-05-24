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

  const addItem = useCartStore(
    (state) => state.addItem
  );

  const product = products.find(
    (item) => item.slug === slug
  );

  const [selectedSize, setSelectedSize] =
    useState({
      label:
        product?.sizes?.[0]?.label || "1KG",

      price:
        product?.sizes?.[0]?.price ||
        product?.price ||
        0,
    });

  if (!product) {
    return notFound();
  }

  const hasSizes = !!product.sizes;

  return (
    <main className="bg-[#F6F0E4] pb-20 pt-8 md:pb-28 md:pt-10">

      <Container>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Product Image */}
          <div className="h-fit lg:sticky lg:top-28">

            <div className="relative aspect-square overflow-hidden rounded-4xl bg-[radial-gradient(circle_at_top_left,#8B5A58,#3B2625_55%,#161414)]">

              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-contain p-8 md:p-12 lg:p-16"
              />

            </div>

          </div>

          {/* Product Content */}
          <div className="flex flex-col justify-center">

            <p className="mb-4 uppercase tracking-[0.35em] text-[#8A6A5A]">
              {product.category}
            </p>

            <h1 className="text-4xl font-semibold leading-tight text-[#161414] md:text-5xl lg:text-6xl">
              {product.name}
            </h1>

            <p className="mt-5 text-base leading-relaxed text-[#6E625C] md:text-lg lg:text-xl">
              {product.description}
            </p>

            <div className="mt-10">

              <div className="text-4xl font-semibold text-[#161414]">
                ₹{selectedSize.price}
              </div>

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
                      onClick={() =>
                        setSelectedSize(size)
                      }
                      className={`rounded-full border px-5 py-3 text-base transition md:px-6 md:text-lg ${
                        selectedSize.label ===
                        size.label
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

                {product.tastingNotes.map(
                  (note) => (

                    <span
                      key={note}
                      className="rounded-full border border-[#DED3C5] px-5 py-2 text-sm text-[#161414]"
                    >
                      {note}
                    </span>

                  )
                )}

              </div>

            </div>

            {/* Product Info */}
            <div className="mt-12 grid gap-8 sm:grid-cols-3">

              <div>

                <p className="text-sm uppercase tracking-[0.2em] text-[#8A6A5A]">
                  Origin
                </p>

                <p className="mt-2 text-lg text-[#161414]">
                  {product.origin}
                </p>

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

                <p className="mt-2 text-lg text-[#161414]">
                  {product.process}
                </p>

              </div>

            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">

              <Button
                onClick={() =>
                  addItem({
                    id: product.id,
                    slug: product.slug,
                    name: product.name,
                    image: product.image,
                    price: selectedSize.price,
                    selectedSize:
                      selectedSize.label,
                  })
                }
              >
                Add To Cart
              </Button>

              <Button variant="secondary">
                Buy Now
              </Button>

            </div>

          </div>

        </div>

      </Container>

    </main>
  );
}