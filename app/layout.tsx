import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import { Poppins } from "next/font/google";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CartDrawer from "@/components/cart/cart-drawer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Brew & Zest | Premium Specialty Coffee Beans",

  description:
    "Discover premium specialty coffee beans crafted with rich origins, luxury roasting, and unforgettable flavor profiles.",

  keywords: [
    "specialty coffee",
    "premium coffee beans",
    "arabica coffee",
    "barrel aged coffee",
    "fruit aged coffee",
    "luxury coffee brand",
    "brew and zest",
  ],

  authors: [
    {
      name: "Brew & Zest",
    },
  ],

  creator: "Brew & Zest",

  metadataBase: new URL(
    "https://brewandzest.in"
  ),

  openGraph: {
    title:
      "Brew & Zest | Premium Specialty Coffee Beans",

    description:
      "Luxury specialty coffee crafted for refined coffee experiences.",

    url: "https://brewandzest.in",

    siteName: "Brew & Zest",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brew & Zest Coffee",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Brew & Zest | Premium Specialty Coffee Beans",

    description:
      "Luxury specialty coffee crafted for refined coffee experiences.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} bg-[#f6efe3] text-[#161414] antialiased`}
      >
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />

        <Header />

        <CartDrawer />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}