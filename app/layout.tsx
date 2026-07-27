import type { Metadata } from "next";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
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
        className={`${jakarta.variable} min-h-screen bg-[#F8FBFD] font-sans text-[#2F3742] antialiased`}
      >
        <header className="sticky top-0 z-50 border-b border-[#E4EBF0] bg-white/95 backdrop-blur-md">
          <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="text-base font-semibold tracking-[-0.025em] text-[#2F3742] sm:text-lg"
            >
              Justine Roth Nutrition
            </Link>

            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-8 text-sm font-medium text-[#687482] md:flex"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-[#6F879E]"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="rounded-full bg-[#7F98AD] px-5 py-2.5 text-white transition-colors hover:bg-[#6F879E]"
              >
                Contact
              </Link>
            </nav>

            <details className="relative md:hidden">
              <summary className="cursor-pointer list-none rounded-full border border-[#CCD8E1] bg-white px-4 py-2 text-sm font-medium text-[#2F3742]">
                Menu
              </summary>

              <nav
                aria-label="Mobile navigation"
                className="absolute right-0 top-12 w-56 rounded-2xl border border-[#E4EBF0] bg-white p-3 shadow-xl"
              >
                <div className="flex flex-col">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-xl px-4 py-3 text-sm font-medium text-[#687482] transition-colors hover:bg-[#F3F7FA] hover:text-[#2F3742]"
                    >
                      {link.label}
                    </Link>
                  ))}

                  <Link
                    href="/contact"
                    className="mt-2 rounded-xl bg-[#7F98AD] px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#6F879E]"
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            </details>
          </div>
        </header>

        <div className="min-h-[calc(100vh-72px)]">{children}</div>

        <footer className="border-t border-[#E4EBF0] bg-white px-5 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-lg font-semibold tracking-[-0.025em] text-[#2F3742]">
                Justine Roth Nutrition
              </p>

              <p className="mt-3 max-w-md text-sm leading-6 text-[#687482]">
                Compassionate eating disorder and nutrition counseling for
                adolescents, adults, and families.
              </p>

              <nav
                aria-label="Footer navigation"
                className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[#687482]"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-[#6F879E]"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  className="transition-colors hover:text-[#6F879E]"
                >
                  Contact
                </Link>
              </nav>
            </div>

            <p className="text-sm text-[#87929D]">
              © {new Date().getFullYear()} Justine Roth Nutrition
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
