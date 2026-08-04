import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Justine Roth, MS, RD, CEDS-C",

  description:
    "Schedule a consultation for eating disorder nutrition counseling in New York City or virtually throughout New York.",

  alternates: {
    canonical: "https://justinerothnutrition.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
