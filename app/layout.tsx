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
        className={`${geist.variable} ${cormorant.variable} bg-[#F8F5F0] font-sans text-[#2F332F] antialiased`}
      >
        <header className="sticky top-0 z-50 border-b border-[#DED8CF] bg-[#FFFDF8]/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
            <Link
              href="/"
              className="font-display text-xl leading-none tracking-[-0.01em] text-[#2F332F] sm:text-2xl"
            >
              Justine Roth Nutrition
            </Link>

            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-7 text-sm text-[#5F665F] md:flex"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-[#2F332F]"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="rounded-full bg-[#536857] px-5 py-2.5 text-white transition hover:bg-[#435646]"
              >
                Contact
              </Link>
            </nav>

            <details className="relative md:hidden">
              <summary className="cursor-pointer list-none rounded-full border border-[#BFC5BC] px-4 py-2 text-sm text-[#2F332F]">
                Menu
              </summary>

              <nav
                aria-label="Mobile navigation"
                className="absolute right-0 top-12 w-56 rounded-2xl border border-[#E8E1D8] bg-[#FFFDF8] p-3 shadow-xl"
              >
                <div className="flex flex-col">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-xl px-4 py-3 text-sm text-[#5F665F] transition hover:bg-[#F3F0EB] hover:text-[#2F332F]"
                    >
                      {link.label}
                    </Link>
                  ))}

                  <Link
                    href="/contact"
                    className="mt-2 rounded-xl bg-[#536857] px-4 py-3 text-center text-sm text-white transition hover:bg-[#435646]"
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            </details>
          </div>
        </header>

        {children}

        <footer className="border-t border-[#DED8CF] bg-[#FFFDF8] px-6 py-12">
          <div className="mx-auto grid max-w-6xl gap-8 text-sm text-[#5F665F] md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="font-display text-2xl text-[#2F332F]">
                Justine Roth Nutrition
              </p>

              <p className="mt-3 max-w-md leading-6">
                Compassionate eating disorder and nutrition counseling for
                adolescents, adults, and families.
              </p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition hover:text-[#2F332F]"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  className="transition hover:text-[#2F332F]"
                >
                  Contact
                </Link>
              </div>
            </div>

            <p>
              © {new Date().getFullYear()} Justine Roth Nutrition
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
