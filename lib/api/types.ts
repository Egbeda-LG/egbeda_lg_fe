/**
 * Response shapes for the Egbeda LG backend, verified against the live dev API
 * (https://egbeda-api-dev.jumpingcrab.com/api/v1) rather than transcribed from
 * the Postman examples - a few fields differ, and they are noted below.
 */

export type PaginationQuery = {
  page?: number
  limit?: number
}

/**
 * Filters the list endpoints accept. Multi-value filters take a comma-separated
 * string (e.g. `category=announcement,health`).
 */
export type ListQuery = PaginationQuery & {
  search?: string
  status?: string
  category?: string
  is_featured?: boolean
  ward?: string
  ward_id?: string
  department?: string
  office?: string
  email?: string
  subject?: string
}

/**
 * The API returns `page` and `limit` as strings (they are echoed straight back
 * from the query string) and omits `page` entirely when it was not sent.
 */
export type RawPaginationMeta = {
  page?: string | number
  limit?: string | number
  total: number
  total_pages: number
}

export type PaginationMeta = {
  page: number
  limit: number
  total: number
  totalPages: number
}

export type PaginatedResponse<T, TStats = never> = {
  data: T[]
  meta: RawPaginationMeta
  stats?: TStats
}

export type SocialMediaLink = {
  platform: string
  url: string
}

/** An image plus the pages the admin chose to surface it on. */
export type PlacementImage = {
  photo_url: string
  is_in_homepage: boolean
  is_in_government: boolean
  is_in_about: boolean
}

export type Timestamps = {
  createdAt?: string
  updatedAt?: string
}

export type WardItem = {
  ward_id: string
  ward_number: string
  name: string
}

/** `GET /past-government` — one officeholder with a display period. */
export type PastGovernmentItem = Timestamps & {
  _id?: string
  name: string
  date: string
  sort_order: number
  /** elected | caretaker | sole_administrator */
  election_type: string
}

/** `GET /markets` — a council-managed market, keyed by `market_number`. */
export type MarketItem = {
  market_number: string
  name: string
}

export type NewsItem = Timestamps & {
  _id: string
  title: string
  /** Rich text authored in the admin editor. Rendered as HTML. */
  content: string
  status: string
  is_featured: boolean
  category: string
}

export type NewsStats = {
  published: number
  completed_projects: number
  landmarks_and_culture: number
}

export type ProjectItem = Timestamps & {
  _id: string
  name: string
  ward_id: string
  /** Populated by the API on list and detail reads. */
  ward?: WardItem
  location: string
  start_date: string
  end_date: string
  contractor: string
  description: string
  photo_url: string
  status: string
  is_featured: boolean
}

export type ProjectStats = {
  total_wards: number
  wards_covered: number
}

export type LandmarkItem = Timestamps & {
  _id: string
  name: string
  category: string
  description: string
  location: string
  photo_url: string
  status: string
  is_featured: boolean
}

export type ServiceItem = Timestamps & {
  _id: string
  name: string
  short_description: string
  department: string
  timeline: string
  description: string
  eligibility: string[]
  required_documents: string[]
  application_process: string[]
  status: string
  is_featured: boolean
}

export type DepartmentItem = Timestamps & {
  _id: string
  name: string
  head_of_department: string
  staff_no: number
  status: string
  description: string
}

export type CouncillorItem = Timestamps & {
  _id: string
  name: string
  ward_id: string
  /** Populated by the API on list and detail reads. */
  ward?: WardItem
  status: string
  social_media: SocialMediaLink[]
  images: PlacementImage[]
}

export type ManagementItem = Timestamps & {
  _id: string
  name: string
  office: string
  status: string
  description: string
  photo_url: string
  social_media: SocialMediaLink[]
}

export type NulgeItem = Timestamps & {
  _id: string
  name: string
  office: string
  status: string
  social_media: SocialMediaLink[]
  images: PlacementImage[]
}

export type ContactMessage = Timestamps & {
  _id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  subject: string
  message: string
  photo_url?: string
}

/** Body accepted by `POST /uploads/presigned-url`. */
export type PresignedUploadPayload = {
  file_name: string
  content_type: string
  folder: string
}

export type PresignedUploadResponse = {
  upload_url: string
  file_url: string
  key: string
  expires_in: number
}

/** Body accepted by `POST /messages`. `phone` and `photo_url` are optional. */
export type ContactMessagePayload = {
  first_name: string
  last_name: string
  email: string
  subject: string
  message: string
  phone?: string
  photo_url?: string
}

export type OrganizationDetails = {
  official_name: string
  lg_name: string
  state: string
  region: string
  year_of_establishment: number
  landmass_per_sq_km: number
  population: number
  no_of_wards: number
  no_of_schools: number
  no_of_health_centres: number
  no_of_staffs: number
  about: string
}

export type ChairmanInfo = {
  official_name: string
  short_name: string
  years_in_service: number
  projects_delivered: number
  town_halls_hosted: number
  no_of_staffs: number
  biography: string
  message: string
  social_media: SocialMediaLink[]
  images: PlacementImage[]
}

export type ContactAndSupport = {
  official_email: string
  support_email: string
  emergency_line_1: string
  emergency_line_2: string
  headquater_address: string
  google_map_link: string
  latitude: number
  longitude: number
  weekdays: string
  hours: string
}

/**
 * The backend creates the settings document lazily, so every section - and
 * every field inside it - can be missing until the admin has saved once.
 */
export type OrganizationSettings = Timestamps & {
  _id?: string
  organization?: Partial<OrganizationDetails>
  chairman_info?: Partial<ChairmanInfo>
  vice_chairman_info?: Partial<ChairmanInfo>
  contact_and_support?: Partial<ContactAndSupport>
  social_media?: SocialMediaLink[]
}
