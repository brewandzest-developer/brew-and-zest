"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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
    subtitle:
      "Tropical profiles layered with vibrant specialty coffee notes.",
  },
];

export default function HomeCarousel() {
  return (
    <section className="relative">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
        }}
        pagination={{
          clickable: true,
        }}
        loop
        className="h-[90vh]"
      >

        {slides.map((slide) => (

          <SwiperSlide key={slide.title}>

            <div className="relative h-[90vh] w-full overflow-hidden">

              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}