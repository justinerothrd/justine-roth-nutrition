import type { Metadata } from "next";
import Link from "next/link";
import { Instrument_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
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
        className={`${jakarta.variable} ${instrument.variable} min-h-screen bg-white text-[#34414E] antialiased`}
      >
        <header className="sticky top-0 z-50 border-b border-[#E4EBF0] bg-white/95 backdrop-blur-md">
          <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
            <Link
              href="/"
              className="font-heading text-[1.05rem] font-medium tracking-[-0.025em] text-[#34414E]"
            >
              Justine Roth Nutrition
            </Link>

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
                className="rounded-md bg-[#829CB1] px-5 py-2.5 text-white transition-colors hover:bg-[#708A9F]"
              >
                Contact
              </Link>
            </nav>

            <details className="relative md:hidden">
              <summary className="cursor-pointer list-none border border-[#D3DEE6] px-4 py-2 text-sm text-[#34414E]">
                Menu
              </summary>

              <nav
                aria-label="Mobile navigation"
                className="absolute right-0 top-12 w-56 border border-[#E4EBF0] bg-white p-3 shadow-lg"
              >
                <div className="flex flex-col">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-4 py-3 text-sm text-[#687785] hover:bg-[#F7FAFC] hover:text-[#34414E]"
                    >
                      {link.label}
                    </Link>
                  ))}

                  <Link
                    href="/contact"
                    className="mt-2 bg-[#829CB1] px-4 py-3 text-center text-sm text-white"
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            </details>
          </div>
        </header>

        {children}

        <footer className="border-t border-[#E4EBF0] bg-white px-6 py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-[#687785] md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-heading text-lg font-medium tracking-[-0.025em] text-[#34414E]">
                Justine Roth Nutrition
              </p>

              <p className="mt-2 max-w-md leading-6">
                Eating disorder and nutrition counseling for adolescents,
                adults, and families.
              </p>
            </div>

            <p>© {new Date().getFullYear()} Justine Roth Nutrition</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
