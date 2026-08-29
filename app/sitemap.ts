import type { MetadataRoute } from "next"

import { newsApi, servicesApi, withFallback } from "@/lib/api"
import { toDetailSlug } from "@/lib/content"
import { absoluteUrl } from "@/lib/seo"

const emptyList = {
  items: [],
  meta: { page: 1, limit: 200, total: 0, totalPages: 0 },
}

const STATIC_ROUTES: {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
}[] = [
  { path: "/", changeFrequency: "daily", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/projects", changeFrequency: "weekly", priority: 0.8 },
  { path: "/newsroom", changeFrequency: "daily", priority: 0.9 },
  {
    path: "/government/executive-council",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/government/management-team",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/government/nulge",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/government/landmarks-and-culture",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
]

/**
 * Lists every indexable URL, including the published articles and services the
 * API knows about. Regenerated on the same cadence as the pages themselves.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [news, services] = await Promise.all([
    withFallback(() => newsApi.list({ limit: 200 }), emptyList, "sitemap news"),
    withFallback(
      () => servicesApi.list({ limit: 200 }),
      emptyList,
      "sitemap services"
    ),
  ])

  const now = new Date()

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const articleEntries = news.items.map((article) => ({
    url: absoluteUrl(`/newsroom/${toDetailSlug(article.title, article._id)}`),
    lastModified: new Date(article.updatedAt ?? article.createdAt ?? now),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const serviceEntries = services.items.map((service) => ({
    url: absoluteUrl(`/services/${toDetailSlug(service.name, service._id)}`),
    lastModified: new Date(service.updatedAt ?? service.createdAt ?? now),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [...staticEntries, ...articleEntries, ...serviceEntries]
}
