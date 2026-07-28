import type { Metadata } from "next";
import Link from "next/link";
import { Instrument_Sans, Plus_Jakarta_Sans } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
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
    default: "Justine Roth, MS, RD, CEDS-C",
    template: "%s | Justine Roth Nutrition",
  },
  description:
    "Eating disorder and nutrition counseling for adolescents, adults, and families in New York City and virtually.",
};

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
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
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-6 text-sm text-[#687785]">
              <div>
                <p className="font-heading text-lg font-medium tracking-[-0.025em] text-[#34414E]">
                  Justine Roth Nutrition
                </p>

                <p className="mt-2 max-w-md leading-6">
                  Eating disorder and nutrition counseling for adolescents,
                  adults, and families.
                </p>
              </div>

              <nav
                aria-label="Footer navigation"
                className="flex flex-wrap gap-x-6 gap-y-3"
              >
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-[#526D83]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/honestmom.nutrition/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[#687785] transition-colors hover:text-[#718CA2]"
                >
                  <svg
                    aria-hidden="true"
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="0.75"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/justinerothnutrition"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-[#687785] transition-colors hover:text-[#718CA2]"
                >
                  <svg
                    aria-hidden="true"
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.2c0-.9.3-1.5 1.6-1.5H17V5.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2H8v3h2.8v8h2.7z" />
                  </svg>
                </a>
              </div>

              <p className="text-xs text-[#9AA8B5]">
                © {new Date().getFullYear()} Justine Roth Nutrition
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
