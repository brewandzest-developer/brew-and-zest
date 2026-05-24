import Image from "next/image";
import Link from "next/link";

import Container from "../layout/container";

import FadeIn from "../animations/fade-in";

const posts = [
  "/instagram/insta-1.jpg",
  "/instagram/insta-2.jpg",
  "/instagram/insta-3.jpg",
  "/instagram/insta-4.jpg",
  "/instagram/insta-5.jpg",
  "/instagram/insta-6.jpg",
];

export default function InstagramShowcase() {
  return (
    <section className="bg-[#F6F0E4] py-20 md:py-32">

      <Container>

        {/* Heading */}
        <FadeIn>

          <div className="mx-auto mb-16 max-w-4xl text-center md:mb-20">

            <p className="mb-5 uppercase tracking-[0.35em] text-[#8A6A5A]">

              Instagram

            </p>

            <h2 className="text-4xl font-semibold leading-tight text-[#161414] md:text-6xl">

              Coffee Culture Through Our Lens

            </h2>

            <p className="mt-8 text-lg leading-relaxed text-[#6E625C] md:text-xl">

              Follow the world of Brew & Zest —
              crafted moments, specialty brews,
              and refined coffee experiences.

            </p>

          </div>

        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">

          {posts.map(
            (post, index) => (

              <FadeIn
                key={post}
                delay={index * 0.08}
              >

                <div className="group relative overflow-hidden rounded-[28px]">

                  <Image
                    src={post}
                    alt="Instagram Post"
                    width={600}
                    height={600}
                    className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

                </div>

              </FadeIn>

            )
          )}

        </div>

        {/* CTA */}
        <FadeIn delay={0.2}>

          <div className="mt-16 text-center">

            <Link
              href="https://instagram.com/thebrewandzest"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-[#161414] px-8 py-4 text-lg text-white transition hover:opacity-90"
            >

              Follow @thebrewandzest

            </Link>

          </div>

        </FadeIn>

      </Container>

    </section>
  );
}