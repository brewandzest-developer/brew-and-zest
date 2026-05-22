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
  title: "Brew & Zest",
  description: "Premium specialty coffee brand",
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