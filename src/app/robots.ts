import type { MetadataRoute } from "next";

import { business } from "@/config/business";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = business.website.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
