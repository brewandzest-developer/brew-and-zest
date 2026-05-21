import Container from "./container";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E6D7C8] bg-[#FEF4E4]/80 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <h1 className="text-3xl font-bold tracking-tight">
            Brew & Zest
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#"
              className="text-sm transition hover:text-[#7B4E4C]"
            >
              Home
            </a>

            <a
              href="#"
              className="text-sm transition hover:text-[#7B4E4C]"
            >
              Shop
            </a>

            <a
              href="#"
              className="text-sm transition hover:text-[#7B4E4C]"
            >
              About
            </a>

            <a
              href="#"
              className="text-sm transition hover:text-[#7B4E4C]"
            >
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block">
              Search
            </button>

            <button>
              Cart
            </button>

            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}