/**
 * Canonical option values the Egbeda LG API stores, mirrored from the admin
 * app so both apps label a record the same way. `value` is what the API
 * returns; `label` is what residents read.
 */
export type SelectOption = { value: string; label: string }

export const PUBLISH_STATUS_OPTIONS: SelectOption[] = [
  { value: "draft", label: "Draft" },
  { value: "published", label: "Published" },
]

export const ACTIVE_STATUS_OPTIONS: SelectOption[] = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
]

export const SEAT_STATUS_OPTIONS: SelectOption[] = [
  { value: "active", label: "Active" },
  { value: "vacant", label: "Vacant" },
]

export const NEWS_CATEGORY_OPTIONS: SelectOption[] = [
  { value: "all_news", label: "All News" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "health", label: "Health" },
  { value: "education", label: "Education" },
  { value: "security", label: "Security" },
  { value: "environment", label: "Environment" },
  { value: "events_and_ceremonies", label: "Events & Ceremonies" },
  {
    value: "government_and_administration",
    label: "Government & Administration",
  },
  { value: "community_development", label: "Community Development" },
  { value: "arts_culture_and_tourism", label: "Arts, Culture & Tourism" },
  { value: "public_notice", label: "Public Notice" },
  { value: "economy", label: "Economy" },
]

export const LANDMARK_CATEGORY_OPTIONS: SelectOption[] = [
  { value: "landmark", label: "Landmark" },
  { value: "industry", label: "Industry" },
  { value: "e_commerce", label: "E-commerce" },
  { value: "hospitality", label: "Hospitality" },
]

export const MANAGEMENT_OFFICE_OPTIONS: SelectOption[] = [
  {
    value: "head_of_local_government_administration",
    label: "Head of Local Government Administration",
  },
  {
    value: "director_of_finance_and_supplies",
    label: "Director of Finance & Supplies",
  },
  {
    value: "director_of_admin_and_general_services",
    label: "Director of Admin & General Services",
  },
  {
    value: "director_of_finance_and_budget",
    label: "Director of Finance & Budget",
  },
  {
    value: "director_of_works_and_housing",
    label: "Director of Works & Housing",
  },
  {
    value: "director_of_primary_healthcare",
    label: "Director of Primary Healthcare",
  },
  {
    value: "director_of_education_and_social_services",
    label: "Director of Education & Social Services",
  },
  { value: "internal_auditor", label: "Internal Auditor" },
  { value: "information_officer", label: "Information Officer" },
]

export const NULGE_OFFICE_OPTIONS: SelectOption[] = [
  { value: "chairman", label: "Chairman" },
  { value: "vice_chairman", label: "Vice Chairman" },
  { value: "secretary", label: "Secretary" },
  { value: "treasurer", label: "Treasurer" },
  { value: "woman_chairperson", label: "Woman Chairperson" },
  { value: "assistant_chairperson", label: "Assistant Chairperson" },
  { value: "trustee", label: "Trustee" },
  { value: "auditor", label: "Auditor" },
  {
    value: "young_worker_representative",
    label: "Young Worker Representative",
  },
]

/** past-government `election_type` */
export const ELECTION_TYPE_OPTIONS: SelectOption[] = [
  { value: "elected", label: "Elected" },
  { value: "caretaker", label: "Caretaker" },
  { value: "sole_administrator", label: "Sole Administrator" },
]

/** The platforms `social_media[].platform` can hold. */
export const SOCIAL_PLATFORMS = [
  "tiktok",
  "facebook",
  "twitter",
  "instagram",
] as const

export type SocialPlatform = (typeof SOCIAL_PLATFORMS)[number]

/**
 * Turns an API value such as `community_development` into "Community
 * Development", falling back to a title-cased version of anything the option
 * list has not caught up with yet.
 */
export function optionLabel(options: SelectOption[], value?: string | null) {
  if (!value) return ""

  const match = options.find((option) => option.value === value)

  if (match) return match.label

  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}
