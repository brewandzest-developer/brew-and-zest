export interface Product {
    id: number;
    slug: string;
    name: string;
    subtitle: string;
    price: number;
    image: string;
    category: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      slug: "ethiopian-roast",
      name: "Ethiopian Roast",
      subtitle: "Blueberry, citrus & caramel",
      price: 799,
      image: "/products/coffee-1.png",
      category: "Slow Brewed",
    },
  
    {
      id: 2,
      slug: "classic-house-blend",
      name: "Classic House Blend",
      subtitle: "Chocolate, nutty & smooth caramel",
      price: 699,
      image: "/products/coffee-2.png",
      category: "Classic",
    },
  
    {
      id: 3,
      slug: "oak-barrel-aged",
      name: "Oak Barrel Aged",
      subtitle: "Toasted oak warmth & raisin depth",
      price: 1099,
      image: "/products/coffee-3.png",
      category: "Barrel Aged",
    },
  
    {
      id: 4,
      slug: "banana-fermentation",
      name: "Banana Fermentation",
      subtitle: "Creamy banana & tropical cocoa",
      price: 999,
      image: "/products/coffee-4.png",
      category: "Fruit Based Aged",
    },
  
    {
      id: 5,
      slug: "berry-infused-roast",
      name: "Berry Infused Roast",
      subtitle: "Red berries, syrupy cocoa & caramel",
      price: 949,
      image: "/products/coffee-5.png",
      category: "Fruit Based Aged",
    },
  
    {
      id: 6,
      slug: "slow-filter-reserve",
      name: "Slow Filter Reserve",
      subtitle: "Floral citrus & tea-like finish",
      price: 849,
      image: "/products/coffee-6.png",
      category: "Slow Brewed",
    },
  ];