import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/projects", "/projects/dalfin-stenella"].map((path) => ({ url: `${siteUrl}${path}` }))
}
