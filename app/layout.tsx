import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Instrument_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://justinerothnutrition.com"),

  title: {
    default:
      "Eating Disorder Dietitian in NYC | Justine Roth, MS, RD, CEDS-C",
    template: "%s | Justine Roth Nutrition",
  },

  description:
    "Specialized nutrition counseling for eating disorders, ARFID, adolescents, adults, and families in New York City and virtually throughout New York.",

  keywords: [
    "Eating Disorder Dietitian NYC",
    "Eating Disorder Nutrition Counseling",
    "ARFID Dietitian",
    "Anorexia Nutrition Counseling",
    "Bulimia Nutrition Counseling",
    "Binge Eating Disorder Dietitian",
    "Registered Dietitian NYC",
    "CEDS-C",
    "Nutrition Counseling NYC",
    "Virtual Nutrition Counseling",
  ],

  authors: [
    {
      name: "Justine Roth, MS, RD, CEDS-C",
    },
  ],

  creator: "Justine Roth",

  openGraph: {
    title:
      "Eating Disorder Dietitian in NYC | Justine Roth, MS, RD, CEDS-C",

    description:
      "Specialized nutrition counseling for eating disorders, ARFID, adolescents, adults, and families in New York City and virtually throughout New York.",

    url: "https://justinerothnutrition.com",

    siteName: "Justine Roth Nutrition",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Justine Roth Nutrition",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Eating Disorder Dietitian in NYC | Justine Roth, MS, RD, CEDS-C",

    description:
      "Specialized nutrition counseling for eating disorders, adolescents, adults, and families.",

    images: ["/opengraph-image.png"],
  },

  alternates: {
    canonical: "https://justinerothnutrition.com",
  },
};

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/what-to-expect", label: "Working Together" },
  { href: "/groups", label: "Groups" },
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZWPD5V299S"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZWPD5V299S');
          `}
        </Script>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalBusiness",
                  "@id": "https://justinerothnutrition.com/#practice",
                  name: "Justine Roth Nutrition",
                  url: "https://justinerothnutrition.com",
                  logo: "https://justinerothnutrition.com/JR-logo.png",
                  image: "https://justinerothnutrition.com/og-image.png",
                  description:
                    "Specialized nutrition counseling for eating disorders, ARFID, adolescents, adults, and families in New York City and virtually throughout New York.",
                  telephone: "+1-908-485-4995",
                  email: "mailto:justinerothrd@gmail.com",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "226 East 54th Street, Suite 604",
                    addressLocality: "New York",
                    addressRegion: "NY",
                    postalCode: "10022",
                    addressCountry: "US",
                  },
                  areaServed: [
                    {
                      "@type": "City",
                      name: "New York City",
                    },
                    {
                      "@type": "State",
                      name: "New York",
                    },
                  ],
                  founder: {
                    "@id": "https://justinerothnutrition.com/#justine-roth",
                  },
                  sameAs: [
                    "https://www.instagram.com/justinerothnutrition/",
                    "https://www.facebook.com/justinerothnutrition",
                    "https://www.healthprofs.com/us/nutritionists-dietitians/justine-m-roth-new-york-ny/520110",
                  ],
                },
                {
                  "@type": "Person",
                  "@id": "https://justinerothnutrition.com/#justine-roth",
                  name: "Justine Roth",
                  honorificSuffix: "MS, RD, CEDS-C",
                  jobTitle: "Registered Dietitian",
                  url: "https://justinerothnutrition.com/about",
                  image:
                    "https://justinerothnutrition.com/IMG_2310.jpeg",
                  email: "mailto:justinerothrd@gmail.com",
                  telephone: "+1-908-485-4995",
                  worksFor: {
                    "@id": "https://justinerothnutrition.com/#practice",
                  },
                  identifier: {
                    "@type": "PropertyValue",
                    propertyID: "NPI",
                    value: "1497900435",
                  },
                  knowsAbout: [
                    "Eating disorders",
                    "Anorexia nervosa",
                    "Bulimia nervosa",
                    "Binge eating disorder",
                    "ARFID",
                    "Disordered eating",
                    "Adolescent nutrition",
                    "Family and caregiver support",
                    "Nutrition counseling",
                  ],
                  sameAs: [
                    "https://www.instagram.com/justinerothnutrition/",
                    "https://www.facebook.com/justinerothnutrition",
                    "https://www.healthprofs.com/us/nutritionists-dietitians/justine-m-roth-new-york-ny/520110",
                  ],
                },
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />

        <SiteHeader />

        {children}

        <footer className="border-t border-[#E4EBF0] bg-white px-6 py-10 sm:px-8 lg:px-10">
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
                  href="https://www.instagram.com/justinerothnutrition/"
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

        <Analytics />
      </body>
    </html>
  );
}
