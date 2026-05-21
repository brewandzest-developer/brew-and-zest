import Container from "../layout/container";

const features = [
  "Freshly Roasted",
  "Premium Arabica",
  "Fast Delivery",
  "Small Batch Crafted",
];

export default function FeatureStrip() {
  return (
    <section className="border-y border-[#E6D7C8] py-6">
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="text-center text-sm uppercase tracking-[3px] text-[#7B4E4C]"
            >
              {feature}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}