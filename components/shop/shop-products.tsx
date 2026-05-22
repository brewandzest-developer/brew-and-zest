"use client";

import { useMemo, useState } from "react";

import { products } from "../../constants/products";

import Container from "../layout/container";
import ProductCard from "../product/product-card";

const categories = [
  "All",
  "Slow Brewed",
  "Classic",
  "Barrel Aged",
  "Fruit Based Aged",
];

export default function ShopProducts() {

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredProducts = useMemo(() => {

    return products.filter((product) => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        product.subtitle
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;

    });

  }, [search, selectedCategory]);

  const hasActiveFilters =
    search.length > 0 ||
    selectedCategory !== "All";

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("All");
  };

  return (
    <section className="py-20">

      <Container>

        {/* Top Section */}
        <div className="mb-12 space-y-6">

          {/* Search + Clear */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

            <input
              type="text"
              placeholder="Search coffee..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="h-14 w-full rounded-full border border-[#E6D7C8] bg-white px-6 outline-none transition focus:border-[#161414]"
            />

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="h-14 rounded-full border border-[#161414] px-6 text-sm transition hover:bg-[#161414] hover:text-white"
              >
                Clear Filters
              </button>
            )}

          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`rounded-full px-5 py-2 text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#161414] text-white shadow-lg"
                    : "border border-[#161414] hover:bg-[#161414] hover:text-white"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

          {/* Product Count */}
          <div className="flex items-center justify-between">

            <p className="text-sm text-[#6B5E5B]">

              {filteredProducts.length} coffees found

              {selectedCategory !== "All" && (
                <span>
                  {" "}in {selectedCategory}
                </span>
              )}

            </p>

          </div>

        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 ? (

          <div className="flex flex-col items-center justify-center py-24 text-center">

            <h3 className="mb-4 text-4xl font-bold">
              No coffees found
            </h3>

            <p className="max-w-md text-[#6B5E5B]">
              Try adjusting your search or selecting a different category.
            </p>

          </div>

        ) : (

          /* Product Grid */
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                id={product.id}
                slug={product.slug}
                name={product.name}
                subtitle={product.subtitle}
                price={product.price}
                image={product.image}
              />

            ))}

          </div>

        )}

      </Container>

    </section>
  );
}