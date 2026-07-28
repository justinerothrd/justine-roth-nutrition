"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E4EBF0] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-heading text-[1.05rem] font-medium tracking-[-0.025em] text-[#34414E]"
          onClick={() => setMenuOpen(false)}
        >
          Justine Roth Nutrition
        </Link>

        {/* Desktop */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 text-sm text-[#687785] md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#526D83]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="text-[#718CA2] transition-colors hover:text-[#526D83]"
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
                className="fixed inset-0 top-[72px] z-40 bg-black/10"
              />

              <nav
                id="mobile-navigation"
                aria-label="Mobile navigation"
                className="absolute right-0 top-10 z-50 w-52 border border-[#E4EBF0] bg-white p-3 shadow-lg"
              >
                <div className="flex flex-col">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="px-4 py-3 text-sm text-[#687785] hover:bg-[#F7FAFC] hover:text-[#34414E]"
                    >
                      {link.label}
                    </Link>
                  ))}

                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 text-sm text-[#718CA2] hover:bg-[#F7FAFC] hover:text-[#526D83]"
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
