import Image from "next/image";
import Link from "next/link";

import Container from "../layout/container";

export default function BrandStory() {
  return (
    <section className="bg-[#F6F0E4] py-20 md:py-32">

      <Container>

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">

          {/* Image */}
          <div className="relative overflow-hidden rounded-[40px]">

            <div className="absolute inset-0 z-10 bg-black/10" />

            <Image
              src="/images/story.jpg"
              alt="Brew & Zest Story"
              width={900}
              height={1200}
              className="h-125 w-full object-cover md:h-175"
            />

          </div>

          {/* Content */}
          <div>

            <p className="mb-5 uppercase tracking-[0.35em] text-[#8A6A5A]">

              Our Story

            </p>

            <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-[#161414] md:text-6xl">

              Crafted With Intention.
              <br />
              Brewed With Character.

            </h2>

            <p className="mt-8 text-lg leading-relaxed text-[#6E625C] md:text-xl">

              Brew & Zest was born from a passion for
              specialty coffee that goes beyond routine.
              Every batch is thoughtfully sourced,
              carefully roasted, and designed to create
              a luxurious coffee experience rooted in
              depth, aroma, and craftsmanship.

            </p>

            <p className="mt-6 text-lg leading-relaxed text-[#6E625C] md:text-xl">

              From classic roasts to fruit-aged
              experimental profiles, each cup reflects
              our pursuit of refined flavor and modern
              coffee culture.

            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-8">

              <div>

                <h3 className="text-4xl font-semibold text-[#161414] md:text-5xl">
                  10+
                </h3>

                <p className="mt-3 text-[#6E625C]">
                  Specialty Coffee Profiles
                </p>

              </div>

              <div>

                <h3 className="text-4xl font-semibold text-[#161414] md:text-5xl">
                  100%
                </h3>

                <p className="mt-3 text-[#6E625C]">
                  Premium Arabica Beans
                </p>

              </div>

            </div>

            {/* CTA */}
            <div className="mt-14">

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full bg-[#161414] px-8 py-4 text-lg text-white transition hover:opacity-90"
              >

                Discover Our Journey

              </Link>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}