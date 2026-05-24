"use client";

import { motion } from "framer-motion";

import Container from "../layout/container";
import Button from "../ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex min-h-[90vh] items-center overflow-hidden">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[4px] text-[#7B4E4C]">
              Premium Coffee Experience
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              Crafted for the Perfect Brew
            </h1>

            <p className="mb-8 max-w-xl text-lg text-[#6B5E5B]">
              Small-batch specialty coffee with rich origins, bold character,
              and unforgettable flavor.
            </p>

            <div className="flex gap-4">
              <Button>Shop Now</Button>

              <Button variant="secondary">Explore</Button>
            </div>
          </motion.div>

          {/* Right */}
          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Gradient Card */}
            <div className="relative aspect-square overflow-hidden rounded-[40px] bg-[radial-gradient(circle_at_top_left,#8B5A58,#3B2625_55%,#161414)]">
              {/* Glow Overlay */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Product Image */}
              <div className="relative z-10 flex h-full items-center justify-center p-10 md:p-16">
              <Image
                src="/products/coffee-1.png"
                alt="Coffee Bag"
                width={500}
                height={500}
                className="h-85 w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)] transition duration-700 hover:scale-105 md:h-125"
              />
              </div>
            </div>

            {/* Glow Effects */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#E6D7C8] opacity-60 blur-3xl" />

            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#7B4E4C] opacity-40 blur-3xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
