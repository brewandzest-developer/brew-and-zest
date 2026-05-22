import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import { Poppins } from "next/font/google";

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
      <body className={`${poppins.variable} antialiased`}>

<CartDrawer />
<Script src="https://checkout.razorpay.com/v1/checkout.js" />
{children}

</body>
    </html>
  );
}