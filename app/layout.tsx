import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Justine Roth, MS, RD, CEDS-S",
  description:
    "Eating Disorder & Nutrition Counseling for adolescents, adults, and families.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-[#F8F5F0] text-[#2F332F]`}>
        <header className="sticky top-0 z-50 border-b border-[#E8E1D8] bg-[#FFFDF8]/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <a href="/" className="text-base font-medium tracking-wide md:text-lg">
              Justine Roth Nutrition
            </a>

            <nav className="hidden items-center gap-8 text-sm text-[#5F665F] md:flex">
              <a className="transition hover:text-[#2F332F]" href="/">Home</a>
              <a className="transition hover:text-[#2F332F]" href="/about">About</a>
              <a className="transition hover:text-[#2F332F]" href="/services">Services</a>
              <a
                className="rounded-full bg-[#536857] px-5 py-2 text-white transition hover:bg-[#435646]"
                href="/contact"
              >
                Contact
              </a>
            </nav>

            <a
              href="/contact"
              className="rounded-full bg-[#536857] px-4 py-2 text-sm text-white md:hidden"
            >
              Contact
            </a>
          </div>
        </header>

        {children}

        <footer className="border-t border-[#E8E1D8] bg-[#FFFDF8] px-6 py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-[#5F665F] md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-medium text-[#2F332F]">Justine Roth Nutrition</p>
              <p className="mt-1">
                Eating Disorder & Nutrition Counseling
              </p>
            </div>

            <p>© {new Date().getFullYear()} Justine Roth Nutrition</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
