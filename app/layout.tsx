import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: {
    default: "Justine Roth, MS, RD, CEDS-S",
    template: "%s | Justine Roth Nutrition",
  },
  description:
    "Eating disorder and nutrition counseling for adolescents, adults, and families.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/groups", label: "Groups" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${cormorant.variable} bg-[#FCFDFE] font-sans text-[#2C3138] antialiased`}
      >
        <header className="sticky top-0 z-50 border-b border-[#E3E9ED] bg-white/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
            <Link
              href="/"
              className="font-display text-xl leading-none tracking-[-0.01em] text-[#2C3138] sm:text-2xl"
            >
              Justine Roth Nutrition
            </Link>

            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-7 text-sm text-[#68727E] md:flex"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-[#617B91]"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="rounded-full bg-[#7F96A8] px-5 py-2.5 text-white transition hover:bg-[#687F92]"
              >
                Contact
              </Link>
            </nav>

            <details className="relative md:hidden">
              <summary className="cursor-pointer list-none rounded-full border border-[#C9D4DC] px-4 py-2 text-sm text-[#2C3138]">
                Menu
              </summary>

              <nav
                aria-label="Mobile navigation"
                className="absolute right-0 top-12 w-56 rounded-2xl border border-[#E3E9ED] bg-white p-3 shadow-xl"
              >
                <div className="flex flex-col">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-xl px-4 py-3 text-sm text-[#68727E] transition hover:bg-[#F3F7F9] hover:text-[#2C3138]"
                    >
                      {link.label}
                    </Link>
                  ))}

                  <Link
                    href="/contact"
                    className="mt-2 rounded-xl bg-[#7F96A8] px-4 py-3 text-center text-sm text-white transition hover:bg-[#687F92]"
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            </details>
          </div>
        </header>

        {children}

        <footer className="border-t border-[#E3E9ED] bg-white px-6 py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 text-sm text-[#68727E] md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-display text-2xl text-[#2C3138]">
                Justine Roth Nutrition
              </p>

              <p className="mt-3 max-w-md leading-6">
                Compassionate eating disorder and nutrition counseling for
                adolescents, adults, and families.
              </p>

              <nav
                aria-label="Footer navigation"
                className="mt-5 flex flex-wrap gap-x-5 gap-y-3"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition hover:text-[#617B91]"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  className="transition hover:text-[#617B91]"
                >
                  Contact
                </Link>
              </nav>
            </div>

            <p>© {new Date().getFullYear()} Justine Roth Nutrition</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
