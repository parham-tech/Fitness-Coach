import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mahan-coach.com/sitemap.xml", // آدرس نهایی دامنه شما
  };
}
