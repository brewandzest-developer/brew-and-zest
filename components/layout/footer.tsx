import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#F5F0E6]">
      <div className="px-6 py-20 md:px-16">
        {/* Top */}
        <div className="grid gap-16 border-b border-black/10 pb-16 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-4xl font-semibold text-[#161414]">
              Brew & Zest
            </h2>

            <p className="mt-6 max-w-sm text-lg leading-relaxed text-[#6E625C]">
              Premium specialty coffee crafted with bold character, rich
              origins, and unforgettable flavor.
            </p>

            <div className="mt-8 space-y-3 text-[#161414]">
              <a
                href="mailto:info@brewandzest.in"
                className="block transition hover:opacity-60"
              >
                info@brewandzest.in
              </a>

              <a
                href="https://instagram.com/thebrewandzest"
                target="_blank"
                className="block transition hover:opacity-60"
              >
                @thebrewandzest
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold text-[#161414]">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-[#6E625C]">
              <Link href="/" className="transition hover:text-[#161414]">
                Home
              </Link>

              <Link href="/shop" className="transition hover:text-[#161414]">
                Shop
              </Link>

              <Link href="/about" className="transition hover:text-[#161414]">
                About
              </Link>

              <Link href="/contact" className="transition hover:text-[#161414]">
                Contact
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-semibold text-[#161414]">
              Stay Updated
            </h3>

            <p className="mt-4 text-[#6E625C]">
              Subscribe for new coffee drops, brewing stories, and exclusive
              launches.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-black/10 bg-white px-6 py-4 outline-none"
              />

              <button className="rounded-full bg-[#161414] px-8 py-4 text-white transition hover:opacity-90">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 pt-8 text-sm text-[#6E625C] md:flex-row">
          <p>© 2026 Brew & Zest. All rights reserved.</p>

          <div className="flex flex-wrap gap-6 text-[#6E625C]">
            <Link
              href="/refund-policy"
              className="transition hover:text-[#161414]"
            >
              Refund Policy
            </Link>

            <Link
              href="/privacy-policy"
              className="transition hover:text-[#161414]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              className="transition hover:text-[#161414]"
            >
              Terms of Service
            </Link>

            <Link
              href="/shipping-policy"
              className="transition hover:text-[#161414]"
            >
              Shipping Policy
            </Link>

            <Link href="/contact" className="transition hover:text-[#161414]">
              Contact Information
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
