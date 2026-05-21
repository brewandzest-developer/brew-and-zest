import Header from "@/components/layout/header";
import HeroSection from "@/components/home/hero-section";
import FeatureStrip from "@/components/home/feature-strip";
import ProductShowcase from "@/components/home/product-showcase";
import CartDrawer from "@/components/cart/cart-drawer";

export default function Home() {
  return (
    <>
  <Header />

  <HeroSection />

  <FeatureStrip />

  <ProductShowcase />
</>
  );
}