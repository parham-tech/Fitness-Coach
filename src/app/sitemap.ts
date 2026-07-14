import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mahan-coach.com", // آدرس نهایی دامنه شما
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
