import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mahanbalaei.ir", // آدرس نهایی دامنه شما
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
