import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Justine Roth, MS, RD, CEDS-C",
  description:
    "Contact Justine Roth Nutrition to schedule an appointment for eating disorder nutrition counseling in New York City or virtually.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
