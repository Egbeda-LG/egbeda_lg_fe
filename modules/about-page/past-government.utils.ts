import {
  ELECTION_TYPE_OPTIONS,
  optionLabel,
  type PastGovernmentItem,
} from "@/lib/api"

export type PastOfficeholder = {
  id: string
  name: string
  /** e.g. "2006 - 2007" or "24TH MAY 2021 - TILL DATE". */
  period: string
  typeLabel: string
}

export function toPastOfficeholders(
  items: PastGovernmentItem[] = []
): PastOfficeholder[] {
  const ordered = items
    .filter((item) => typeof item.date === "string")
    .sort((a, b) => b.sort_order - a.sort_order)

  return ordered.map((item, index) => ({
    id: item._id ?? `${item.name}-${item.sort_order || index}`,
    name: item.name,
    period: item.date.trim() || "—",
    typeLabel: optionLabel(ELECTION_TYPE_OPTIONS, item.election_type),
  }))
}

/** Splits the roll into the three columns the timeline renders. */
export function toTimelineColumns(
  officeholders: PastOfficeholder[],
  columnCount = 3
): PastOfficeholder[][] {
  if (officeholders.length === 0) return []

  const perColumn = Math.ceil(officeholders.length / columnCount)

  return Array.from({ length: columnCount }, (_, index) =>
    officeholders.slice(index * perColumn, (index + 1) * perColumn)
  ).filter((column) => column.length > 0)
}
