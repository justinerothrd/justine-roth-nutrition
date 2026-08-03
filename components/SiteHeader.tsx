"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/what-to-expect", label: "Working Together" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E4EBF0] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[88px] max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link
  href="/"
  aria-label="Go to homepage"
  onClick={() => setMenuOpen(false)}
  className="flex items-center transition-transform duration-200 hover:scale-[1.02]"
>
          <Image
            src="/JR-logo.png"
            alt="Justine Roth Nutrition"
            width={500}
            height={120}
            priority
            className="h-18 w-auto"
          />
        </Link>

        {/* Desktop */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 text-sm md:flex"
        >
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
  key={link.href}
  href={link.href}
  className={`transition-all duration-200 ${
    active
      ? "font-medium text-[#34414E]"
      : "text-[#687785] hover:-translate-y-px hover:text-[#526D83]"
  }`}
>
  {link.label}
</Link>
            );
          })}

          <Link
            href="/contact"
            className={`transition-all duration-200 ${
              pathname === "/contact"
                ? "font-medium text-[#34414E]"
                : "text-[#718CA2] hover:text-[#526D83]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile */}
        <div className="relative md:hidden">
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
            className="text-sm text-[#34414E]"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          {menuOpen && (
            <>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 top-[88px] z-40 bg-black/10"
              />

              <nav
                id="mobile-navigation"
                aria-label="Mobile navigation"
                className="absolute right-0 top-12 z-50 w-60 border border-[#E4EBF0] bg-white p-3 shadow-lg"
              >
                <div className="flex flex-col">
                  {navLinks.map((link) => {
                    const active =
                      pathname === link.href ||
                      (link.href !== "/" && pathname.startsWith(link.href));

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`px-4 py-3 text-sm transition-colors ${
                          active
                            ? "font-medium text-[#34414E]"
                            : "text-[#687785] hover:bg-[#F7FAFC] hover:text-[#34414E]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}

                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-3 text-sm transition-colors ${
                      pathname === "/contact"
                        ? "font-medium text-[#34414E]"
                        : "text-[#718CA2] hover:bg-[#F7FAFC] hover:text-[#526D83]"
                    }`}
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
