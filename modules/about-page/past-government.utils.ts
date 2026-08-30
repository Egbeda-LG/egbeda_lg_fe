import {
  ELECTION_TYPE_OPTIONS,
  optionLabel,
  type PastGovernmentItem,
} from "@/lib/api"

export type PastOfficeholder = {
  id: string
  name: string
  /** e.g. "May 2014 — Mar 2016", or "May 2021 — till date" for the incumbent. */
  period: string
  typeLabel: string
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

/** Sorts and compares on the term's start date; month and day are optional. */
function toSortKey({ date }: PastGovernmentItem) {
  return (date?.year ?? 0) * 10000 + (date?.month ?? 0) * 100 + (date?.day ?? 0)
}

function formatStart({ date }: PastGovernmentItem) {
  if (!date?.year) return ""

  const month = date.month ? MONTHS[date.month - 1] : undefined

  return month ? `${month} ${date.year}` : String(date.year)
}

/**
 * The API records only the date a term began, so each entry runs until the
 * next one starts and the most recent is still in office. That is why the list
 * has to be built as a whole rather than per record.
 */
export function toPastOfficeholders(
  items: PastGovernmentItem[] = []
): PastOfficeholder[] {
  const ordered = [...items].sort((a, b) => toSortKey(a) - toSortKey(b))

  return ordered.map((item, index) => {
    const start = formatStart(item)
    const next = ordered[index + 1]
    const end = next ? formatStart(next) : "till date"

    return {
      id: item._id ?? `${item.name}-${item.date?.year ?? index}`,
      name: item.name,
      period: start && end ? `${start} — ${end}` : start,
      typeLabel: optionLabel(ELECTION_TYPE_OPTIONS, item.election_type),
    }
  })
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
