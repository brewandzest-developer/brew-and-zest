import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#161414] text-white">

      <div className="mx-auto max-w-360 px-6 py-20">

        <div className="grid gap-14 md:grid-cols-4">

          {/* Brand */}
          <div>

            <h2 className="text-4xl font-bold">
              Brew & Zest
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/70">
              Premium specialty coffee crafted for slow mornings,
              deep conversations, and unforgettable brews.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-white/70">

              <Link href="/">
                Home
              </Link>

              <Link href="/shop">
                Shop
              </Link>

              <Link href="/about">
                About
              </Link>

              <Link href="/contact">
                Contact
              </Link>

            </div>

          </div>

          {/* Categories */}
          <div>

            <h3 className="text-lg font-semibold">
              Categories
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-white/70">

              <p>Slow Brewed</p>

              <p>Classic</p>

              <p>Barrel Aged</p>

              <p>Fruit Based Aged</p>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-lg font-semibold">
              Connect
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-white/70">

              <p>info@brewandzest.in</p>

              <p>@thebrewandzest</p>

              <p>LinkedIn</p>

              <p>India</p>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 text-sm text-white/50">

          © 2026 Brew & Zest. All rights reserved. 

        </div>

      </div>

    </footer>
  );
}