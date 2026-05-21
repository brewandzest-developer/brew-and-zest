import Image from "next/image";
import { notFound } from "next/navigation";

import Header from "@/components/layout/header";
import Container from "@/components/layout/container";
import Button from "@/components/ui/button";

import { products } from "@/constants/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return notFound();
  }

  return (
    <>
      <Header />

      <section className="py-20">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-[40px] bg-gradient-to-br from-[#7B4E4C] to-[#161414] p-10">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-16"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              
              <p className="mb-4 uppercase tracking-[4px] text-[#7B4E4C]">
                Specialty Coffee
              </p>

              <h1 className="mb-6 text-6xl font-bold">
                {product.name}
              </h1>

              <p className="mb-8 text-lg text-[#6B5E5B]">
                {product.subtitle}
              </p>

              <div className="mb-8 text-3xl font-semibold">
                ₹{product.price}
              </div>

              <div className="flex gap-4">
                <Button>
                  Add To Cart
                </Button>

                <Button variant="secondary">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}