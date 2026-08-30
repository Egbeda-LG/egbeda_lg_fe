import { NEWS_CATEGORY_OPTIONS, optionLabel, type NewsItem } from "@/lib/api"
import {
  PLACEHOLDER_IMAGE,
  coverImageFromHtml,
  excerpt,
  toDetailSlug,
} from "@/lib/content"

/** The flattened article shape every newsroom card renders. */
export type NewsCard = {
  id: string
  title: string
  href: string
  category: string
  categoryLabel: string
  date: string
  excerpt: string
  image: string
}

/**
 * The pill row. "All" is a UI-only sentinel - the API has its own `all_news`
 * category that an admin can genuinely tag an article with.
 */
export const NEWS_FILTERS = [
  { value: "all", label: "All" },
  ...NEWS_CATEGORY_OPTIONS,
]

export function toNewsCard(item: NewsItem): NewsCard {
  return {
    id: item._id,
    title: item.title,
    href: `/newsroom/${toDetailSlug(item.title, item._id)}`,
    category: item.category,
    categoryLabel: optionLabel(NEWS_CATEGORY_OPTIONS, item.category),
    date: item.date?.trim() || "",
    excerpt: excerpt(item.content, 200),
    image: coverImageFromHtml(item.content) ?? PLACEHOLDER_IMAGE,
  }
}

export function toNewsCards(items: NewsItem[] = []): NewsCard[] {
  return items.map(toNewsCard)
}

/** Builds the href for a category pill, dropping the param for "All". */
export function categoryHref(value: string) {
  return value === "all" ? "/newsroom" : `/newsroom?category=${value}`
}
