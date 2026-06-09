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
        <header className="border-b border-[#E8E1D8] bg-[#FFFDF8]/90">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <a href="/" className="text-lg font-medium">
              Justine Roth Nutrition
            </a>

            <nav className="hidden gap-8 md:flex">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t py-8">
          <div className="mx-auto max-w-6xl px-6 text-sm text-slate-500">
            © {new Date().getFullYear()} Justine Roth Nutrition
          </div>
        </footer>
      </body>
    </html>
  );
}
