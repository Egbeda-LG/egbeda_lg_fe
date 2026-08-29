import type { ListQuery } from "@/lib/api/types"

/**
 * Drops empty values and the "all" sentinel the filter pills use - sending
 * `category=all` would be matched literally by the API and return nothing.
 */
export function listQuery(query: ListQuery = {}): ListQuery {
  const cleaned: ListQuery = {}

  for (const [key, value] of Object.entries(query)) {
    if (value === undefined || value === null) continue
    if (typeof value === "string" && (value.trim() === "" || value === "all")) {
      continue
    }

    cleaned[key as keyof ListQuery] = value as never
  }

  return cleaned
}
