import Header from "@/components/layout/header";

import ShopHero from "../../components/shop/shop-hero";
import ShopProducts from "../../components/shop/shop-products";

export default function ShopPage() {
  return (
    <>
      <Header />

      <main>
        <ShopHero />

        <ShopProducts />
      </main>
    </>
  );
}