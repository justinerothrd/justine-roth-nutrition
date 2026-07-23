import type { Metadata } from "next";
import Link from "next/link";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Justine Roth, MS, RD, CEDS-S",
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
      <body className={`${geist.className} bg-[#F8F5F0] text-[#2F332F]`}>
        <header className="sticky top-0 z-50 border-b border-[#E8E1D8] bg-[#FFFDF8]/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
            <Link
              href="/"
              className="text-sm font-medium tracking-wide sm:text-base md:text-lg"
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
              <summary className="cursor-pointer list-none rounded-full border border-[#CFC7BC] px-4 py-2 text-sm text-[#2F332F]">
                Menu
              </summary>

              <nav
                aria-label="Mobile navigation"
                className="absolute right-0 top-12 w-52 rounded-2xl border border-[#E8E1D8] bg-[#FFFDF8] p-3 shadow-lg"
              >
                <div className="flex flex-col">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-xl px-4 py-3 text-sm text-[#5F665F] transition hover:bg-[#F8F5F0] hover:text-[#2F332F]"
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

        <footer className="border-t border-[#E8E1D8] bg-[#FFFDF8] px-6 py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-[#5F665F] md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-medium text-[#2F332F]">
                Justine Roth Nutrition
              </p>
              <p className="mt-1">
                Eating Disorder &amp; Nutrition Counseling
              </p>
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
