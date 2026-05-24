import HeroSection from "@/components/home/hero-section";
import FeatureStrip from "@/components/home/feature-strip";
import ProductShowcase from "@/components/home/product-showcase";
import HomeCarousel from "@/components/home/home-carousel";
import BrandStory from "@/components/home/brand-story";
import Testimonials from "@/components/home/testimonials";
import InstagramShowcase from "@/components/home/instagram-showcase";

export default function Home() {

  return (
    <>

  <HomeCarousel />

  <HeroSection />

  <FeatureStrip />

  <ProductShowcase />

  <BrandStory />

  <Testimonials />

  <InstagramShowcase />
</>
  );
}