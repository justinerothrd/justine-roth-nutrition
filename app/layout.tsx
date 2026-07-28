import type { Metadata } from "next";
import Link from "next/link";
import { Instrument_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

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
       <SiteHeader />

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

              <nav
                aria-label="Footer navigation"
                className="mt-5 flex flex-wrap gap-x-5 gap-y-3"
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
                  className="transition-colors hover:text-[#526D83]"
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
