import {
  Coffee,
  Leaf,
  ShieldCheck,
  Truck,
} from "lucide-react";

import Container from "../layout/container";

import FadeIn from "../animations/fade-in";

const features = [
  {
    icon: Coffee,

    title: "Freshly Roasted",

    subtitle:
      "Crafted in small batches for exceptional flavor.",
  },

  {
    icon: Leaf,

    title: "Premium Arabica",

    subtitle:
      "Ethically sourced specialty-grade beans.",
  },

  {
    icon: Truck,

    title: "Fast Delivery",

    subtitle:
      "Nationwide shipping with freshness sealed in.",
  },

  {
    icon: ShieldCheck,

    title: "Small Batch Crafted",

    subtitle:
      "Curated for a refined luxury coffee experience.",
  },
];

export default function FeatureStrip() {
  return (
    <section className="border-y border-[#E6D7C8] bg-[#F8F3EA] py-14 md:py-20">

      <Container>

        {/* Heading */}
        <FadeIn>

          <div className="mb-12 text-center md:mb-16">

            <p className="mb-4 uppercase tracking-[0.35em] text-[#8A6A5A]">

              Why Brew & Zest

            </p>

            <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight text-[#161414] md:text-5xl">

              Crafted Beyond Ordinary Coffee

            </h2>

          </div>

        </FadeIn>

        {/* Features */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {features.map(
            (
              feature,
              index
            ) => {

              const Icon =
                feature.icon;

              return (

                <FadeIn
                  key={
                    feature.title
                  }
                  delay={
                    index * 0.1
                  }
                >

                  <div className="group h-full rounded-4xl border border-black/5 bg-white/70 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

                    {/* Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F3E8DB] transition-all duration-500 group-hover:scale-105">

                      <Icon
                        size={28}
                        className="text-[#8A6A5A]"
                      />

                    </div>

                    {/* Content */}
                    <div className="mt-8">

                      <h3 className="text-2xl font-semibold text-[#161414]">

                        {
                          feature.title
                        }

                      </h3>

                      <p className="mt-4 leading-relaxed text-[#6E625C]">

                        {
                          feature.subtitle
                        }

                      </p>

                    </div>

                  </div>

                </FadeIn>

              );

            }
          )}

        </div>

      </Container>

    </section>
  );
}