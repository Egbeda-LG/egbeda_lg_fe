import { apiFetch, apiPost } from "@/lib/api/client"
import { ApiError } from "@/lib/api/errors"
import { createReadRepository } from "@/lib/api/resource-repository"
import type {
  ContactMessage,
  ContactMessagePayload,
  CouncillorItem,
  DepartmentItem,
  LandmarkItem,
  MarketItem,
  ManagementItem,
  NewsItem,
  NewsStats,
  NulgeItem,
  PastGovernmentItem,
  OrganizationSettings,
  ProjectItem,
  ProjectStats,
  ServiceItem,
  WardItem,
} from "@/lib/api/types"

const API_PREFIX = "/api/v1"

/** Only content the admin has published may appear on the public site. */
const PUBLISHED = { status: "published" }

/** Directory records use active/inactive rather than draft/published. */
const ACTIVE = { status: "active" }

/**
 * How long each resource stays fresh, in seconds, chosen by how often the
 * council actually edits it. These are the ceiling on how stale a page can be
 * *without* a revalidation ping; `POST /api/revalidate` clears a tag the moment
 * something is published, so in practice updates land immediately.
 */
export const REVALIDATE = {
  /** Announcements are the most time-sensitive thing on the site. */
  news: 30,
  projects: 60,
  services: 60,
  landmarks: 120,
  /** Directory records change when someone is appointed or leaves. */
  departments: 120,
  councillors: 120,
  management: 120,
  nulge: 120,
  /** Drives the top bar, footer and every statistic, so keep it current. */
  organizationSettings: 60,
  /** The roll of past officeholders grows once per term. */
  pastGovernment: 3600,
  /** Ward boundaries and the market register effectively never change. */
  wards: 3600,
  markets: 3600,
  /** Admin inbox data - never cached, and never rendered publicly. */
  messages: 0,
} as const

export const newsApi = createReadRepository<NewsItem, NewsStats>(
  "news",
  `${API_PREFIX}/news`,
  { defaultQuery: PUBLISHED, revalidate: REVALIDATE.news }
)

export const projectsApi = createReadRepository<ProjectItem, ProjectStats>(
  "projects",
  `${API_PREFIX}/projects`,
  { defaultQuery: PUBLISHED, revalidate: REVALIDATE.projects }
)

export const landmarksApi = createReadRepository<LandmarkItem>(
  "landmarks",
  `${API_PREFIX}/landmarks`,
  { defaultQuery: PUBLISHED, revalidate: REVALIDATE.landmarks }
)

export const servicesApi = createReadRepository<ServiceItem>(
  "services",
  `${API_PREFIX}/services`,
  { defaultQuery: PUBLISHED, revalidate: REVALIDATE.services }
)

export const departmentsApi = createReadRepository<DepartmentItem>(
  "departments",
  `${API_PREFIX}/departments`,
  { defaultQuery: ACTIVE, revalidate: REVALIDATE.departments }
)

/**
 * Councillors are listed unfiltered: a vacant seat is public information and
 * the executive council page renders it as such.
 */
export const councillorsApi = createReadRepository<CouncillorItem>(
  "councillors",
  `${API_PREFIX}/councillors`,
  { revalidate: REVALIDATE.councillors }
)

export const managementApi = createReadRepository<ManagementItem>(
  "management",
  `${API_PREFIX}/management`,
  { defaultQuery: ACTIVE, revalidate: REVALIDATE.management }
)

export const nulgeApi = createReadRepository<NulgeItem>(
  "nulge",
  `${API_PREFIX}/nulge`,
  { defaultQuery: ACTIVE, revalidate: REVALIDATE.nulge }
)

/**
 * Residents submit messages through the contact form. Listing and deleting them
 * requires an admin token, so those reads only work from the admin app.
 */
const messagesRepository = createReadRepository<ContactMessage>(
  "messages",
  `${API_PREFIX}/messages`,
  { revalidate: REVALIDATE.messages }
)

/**
 * The roll of former chairmen and administrators. Paginated, unlike wards and
 * markets, and its meta carries has_next_page/has_previous_page.
 */
export const pastGovernmentApi = createReadRepository<PastGovernmentItem>(
  "past-government",
  `${API_PREFIX}/past-government`,
  { revalidate: REVALIDATE.pastGovernment }
)

export const messagesApi = {
  ...messagesRepository,
  /**
   * The one write the public site makes. `POST /messages` is unauthenticated;
   * reading the inbox back is not, which is why only this is exposed here.
   */
  create: (payload: ContactMessagePayload) =>
    apiPost<ContactMessage>(`${API_PREFIX}/messages`, payload),
}

/** `GET /wards` answers with a bare array rather than a paginated envelope. */
export const wardsApi = {
  resource: "wards",
  path: `${API_PREFIX}/wards`,
  tags: ["wards"],
  list: (options: { revalidate?: number } = {}) =>
    apiFetch<WardItem[]>(`${API_PREFIX}/wards`, {
      tags: ["wards"],
      revalidate: options.revalidate ?? REVALIDATE.wards,
    }),
  getById: (id: string, options: { revalidate?: number } = {}) =>
    apiFetch<WardItem>(`${API_PREFIX}/wards/${id}`, {
      tags: ["wards", `wards:${id}`],
      revalidate: options.revalidate ?? REVALIDATE.wards,
    }),
}

/** `GET /markets` answers with a bare array, keyed by `market_number`. */
export const marketsApi = {
  resource: "markets",
  path: `${API_PREFIX}/markets`,
  tags: ["markets"],
  list: (options: { revalidate?: number } = {}) =>
    apiFetch<MarketItem[]>(`${API_PREFIX}/markets`, {
      tags: ["markets"],
      revalidate: options.revalidate ?? REVALIDATE.markets,
    }),
  getById: (marketNumber: string, options: { revalidate?: number } = {}) =>
    apiFetch<MarketItem>(`${API_PREFIX}/markets/${marketNumber}`, {
      tags: ["markets", `markets:${marketNumber}`],
      revalidate: options.revalidate ?? REVALIDATE.markets,
    }),
}

/** `GET /organization-settings` answers with the single settings document. */
export const organizationSettingsApi = {
  resource: "organization-settings",
  path: `${API_PREFIX}/organization-settings`,
  tags: ["organization-settings"],
  get: (options: { revalidate?: number } = {}) =>
    apiFetch<OrganizationSettings>(`${API_PREFIX}/organization-settings`, {
      tags: ["organization-settings"],
      revalidate: options.revalidate ?? REVALIDATE.organizationSettings,
    }),
}

/**
 * Every section of the site keeps rendering when the API is unreachable, so a
 * failed read degrades to the supplied fallback instead of a 500.
 */
export async function withFallback<T>(
  read: () => Promise<T>,
  fallback: T,
  label: string
): Promise<T> {
  try {
    return await read()
  } catch (error) {
    const detail = error instanceof ApiError ? error.message : String(error)

    console.error(`[api] ${label} failed: ${detail}`)

    return fallback
  }
}
