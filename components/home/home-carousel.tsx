"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const slides = [
  {
    image: "/images/car-1.jpg",
    title: "Crafted for the Perfect Brew",
    subtitle:
      "Premium small-batch coffee with rich origins and bold character.",
  },
  {
    image: "/images/car-2.jpg",
    title: "Slow Brewed Luxury",
    subtitle:
      "Experience smooth, deep, specialty coffee crafted with precision.",
  },
  {
    image: "/images/car-3.jpg",
    title: "Fruit Based Aged Collection",
    subtitle: "Tropical profiles layered with vibrant specialty coffee notes.",
  },
];

export default function HomeCarousel() {
  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
        }}
        loop
        className="h-[65vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="relative h-[65vh] w-full overflow-hidden">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
