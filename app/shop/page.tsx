"use client";

import { useState } from "react";

import ProductCard from "@/components/product/product-card";
import { products } from "@/data/products";

const categories = [
  "All",
  "Slow Brewed",
  "Classic",
  "Barrel Aged",
  "Fruit Based Aged",
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#F6F0E4]">
      <section className="px-6 pb-24 pt-10 md:px-16">
        <h1 className="max-w-4xl text-6xl font-semibold leading-tight text-[#161414]">
          Explore Specialty Coffee Beans
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[#6E625C]">
          Curated premium coffee beans sourced from exceptional farms
          with unique tasting profiles.
        </p>
      </section>

      <section className="border-t border-[#DED3C5] px-6 py-20 md:px-16">
        <input
          type="text"
          placeholder="Search coffee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-full border border-[#DED3C5] bg-white px-8 py-5 text-lg outline-none"
        />

        <div className="mt-10 flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-8 py-3 text-lg transition ${
                selectedCategory === category
                  ? "border-[#161414] bg-[#161414] text-white"
                  : "border-[#161414] text-[#161414]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="mt-10 text-lg text-[#6E625C]">
          {filteredProducts.length} coffees found
        </p>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
}