import HeroSection from "@/components/home/hero-section";
import FeatureStrip from "@/components/home/feature-strip";
import ProductShowcase from "@/components/home/product-showcase";
import HomeCarousel from "@/components/home/home-carousel";

export default function Home() {

  return (
    <>

  <HomeCarousel />

  <HeroSection />

  <FeatureStrip />

  <ProductShowcase />
</>
  );
}