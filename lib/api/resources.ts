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
  PresignedUploadPayload,
  PresignedUploadResponse,
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

export const newsApi = createReadRepository<NewsItem, NewsStats>(
  "news",
  `${API_PREFIX}/news`,
  { defaultQuery: PUBLISHED }
)

export const projectsApi = createReadRepository<ProjectItem, ProjectStats>(
  "projects",
  `${API_PREFIX}/projects`,
  { defaultQuery: PUBLISHED }
)

export const landmarksApi = createReadRepository<LandmarkItem>(
  "landmarks",
  `${API_PREFIX}/landmarks`,
  { defaultQuery: PUBLISHED }
)

export const servicesApi = createReadRepository<ServiceItem>(
  "services",
  `${API_PREFIX}/services`,
  { defaultQuery: PUBLISHED }
)

export const departmentsApi = createReadRepository<DepartmentItem>(
  "departments",
  `${API_PREFIX}/departments`,
  { defaultQuery: ACTIVE }
)

/**
 * Councillors are listed unfiltered: a vacant seat is public information and
 * the executive council page renders it as such.
 */
export const councillorsApi = createReadRepository<CouncillorItem>(
  "councillors",
  `${API_PREFIX}/councillors`
)

export const managementApi = createReadRepository<ManagementItem>(
  "management",
  `${API_PREFIX}/management`,
  { defaultQuery: ACTIVE }
)

export const nulgeApi = createReadRepository<NulgeItem>(
  "nulge",
  `${API_PREFIX}/nulge`,
  { defaultQuery: ACTIVE }
)

/**
 * Residents submit messages through the contact form. Listing and deleting them
 * requires an admin token, so those reads only work from the admin app.
 */
const messagesRepository = createReadRepository<ContactMessage>(
  "messages",
  `${API_PREFIX}/messages`
)

/**
 * The roll of former chairmen and administrators. Paginated, unlike wards and
 * markets, and its meta carries has_next_page/has_previous_page.
 */
export const pastGovernmentApi = createReadRepository<PastGovernmentItem>(
  "past-government",
  `${API_PREFIX}/past-government`
)

/**
 * Presigned S3 uploads. The endpoint is admin-authenticated, so the public site
 * can only reach it when EGBEDA_API_TOKEN is configured - see
 * `uploadsEnabled()` in the contact module.
 */
export const uploadsApi = {
  resource: "uploads",
  createPresignedUrl: (payload: PresignedUploadPayload, token: string) =>
    apiPost<PresignedUploadResponse>(
      `${API_PREFIX}/uploads/presigned-url`,
      payload,
      { headers: { Authorization: `Bearer ${token}` } }
    ),
}

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
  list: () => apiFetch<WardItem[]>(`${API_PREFIX}/wards`),
  getById: (id: string) => apiFetch<WardItem>(`${API_PREFIX}/wards/${id}`),
}

/** `GET /markets` answers with a bare array, keyed by `market_number`. */
export const marketsApi = {
  resource: "markets",
  path: `${API_PREFIX}/markets`,
  list: () => apiFetch<MarketItem[]>(`${API_PREFIX}/markets`),
  getById: (marketNumber: string) =>
    apiFetch<MarketItem>(`${API_PREFIX}/markets/${marketNumber}`),
}

/** `GET /organization-settings` answers with the single settings document. */
export const organizationSettingsApi = {
  resource: "organization-settings",
  path: `${API_PREFIX}/organization-settings`,
  get: () =>
    apiFetch<OrganizationSettings>(`${API_PREFIX}/organization-settings`),
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
