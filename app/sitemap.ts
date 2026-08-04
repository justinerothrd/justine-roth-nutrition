import type { MetadataRoute } from "next";

const siteUrl = "https://justinerothnutrition.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services`,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/what-to-expect`,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/groups`,
      priority: 0.6,
    },
    {
      url: `${siteUrl}/contact`,
      priority: 0.7,
    },
  ];
}
