import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[#f5ecdc] text-[#161414]">

      {/* Hero */}
      <section className="border-b border-black/10">

        <div className="mx-auto max-w-360 px-6 py-28">

          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[#7c5c52]">
            About Brew & Zest
          </p>

          <h1 className="max-w-225 text-6xl font-bold leading-tight md:text-8xl">
            Crafted For
            Slow Coffee
            Experiences
          </h1>

          <p className="mt-10 max-w-175 text-xl leading-9 text-black/70">
            Brew & Zest was built around the belief that coffee should
            feel intentional, immersive, and deeply memorable.
          </p>

        </div>

      </section>

      {/* Story */}
      <section>

        <div className="mx-auto grid max-w-360 gap-20 px-6 py-28 md:grid-cols-2">

          <div>

            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#7c5c52]">
              Our Story
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Small Batch.
              Premium Character.
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-9 text-black/70">

            <p>
              We source carefully selected coffee beans and craft
              specialty profiles that feel luxurious yet approachable.
            </p>

            <p>
              From slow brewed classics to fruit-aged experiments,
              every collection is designed to create a unique sensory
              experience.
            </p>

            <p>
              Brew & Zest blends modern coffee culture with elegant,
              minimal branding inspired by premium lifestyle aesthetics.
            </p>

          </div>

        </div>

      </section>

      {/* Categories */}
      <section className="bg-[#161414] text-white">

        <div className="mx-auto max-w-360 px-6 py-28">

          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-white/50">
            Coffee Collections
          </p>

          <h2 className="max-w-175 text-5xl font-bold leading-tight">
            Crafted Collections For Every Brew Style
          </h2>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Slow Brewed",
              "Classic",
              "Barrel Aged",
              "Fruit Based Aged",
            ].map((item) => (
              <div
                key={item}
                className="rounded-4xl border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-2xl font-semibold">
                  {item}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  Specialty crafted coffee experiences with premium
                  roasting profiles and bold character.
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section>

        <div className="mx-auto max-w-360 px-6 py-28 text-center">

          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[#7c5c52]">
            Explore Brew & Zest
          </p>

          <h2 className="mx-auto max-w-200 text-5xl font-bold leading-tight">
            Discover Premium Coffee Crafted With Intention
          </h2>

          <Link
            href="/shop"
            className="mt-10 inline-flex rounded-full bg-[#161414] px-10 py-5 text-white transition hover:opacity-90"
          >
            Shop Collection
          </Link>

        </div>

      </section>

    </main>
  );
}