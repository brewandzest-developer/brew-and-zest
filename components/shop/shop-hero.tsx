import Container from "../layout/container";

export default function ShopHero() {
  return (
    <section className="border-b border-[#E6D7C8] py-20">
      <Container>

        <div className="max-w-3xl">
          
          <p className="mb-4 uppercase tracking-[4px] text-[#7B4E4C]">
            Brew & Zest Collection
          </p>

          <h1 className="mb-6 text-6xl font-bold leading-tight">
            Explore Specialty Coffee Beans
          </h1>

          <p className="text-lg text-[#6B5E5B]">
            Curated premium coffee beans sourced
            from exceptional farms with unique
            tasting profiles.
          </p>
        </div>

      </Container>
    </section>
  );
}