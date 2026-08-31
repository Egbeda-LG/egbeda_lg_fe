import type { ProjectItem, WardItem } from "@/lib/api"
import { PLACEHOLDER_IMAGE, formatDateRange } from "@/lib/content"

/** The flattened shape the project cards render. */
export type ProjectCard = {
  id: string
  title: string
  description: string
  image: string
  location: string
  wardNumber: string
  wardName: string
  contractor: string
  schedule: string
  isFeatured: boolean
}

export function toProjectCard(project: ProjectItem): ProjectCard {
  return {
    id: project._id,
    title: project.name,
    description: project.description,
    image: project.photo_url || PLACEHOLDER_IMAGE,
    location: project.location,
    wardNumber: project.ward?.ward_number ?? "",
    wardName: project.ward?.name ?? "",
    contractor: project.contractor,
    schedule: formatDateRange(project.start_date, project.end_date),
    isFeatured: project.is_featured,
  }
}

export function toProjectCards(projects: ProjectItem[] = []): ProjectCard[] {
  return projects.map(toProjectCard)
}

/**
 * `GET /projects?ward=…` is accepted but ignored by the API, so the ward pills
 * narrow the fetched list here instead.
 */
export function filterByWard(projects: ProjectCard[], ward: string) {
  if (!ward || ward === "all") return projects

  return projects.filter((project) => project.wardNumber === ward)
}

/** Only the wards that actually have a published project get a pill. */
export function wardFilters(projects: ProjectCard[], wards: WardItem[]) {
  const covered = new Set(projects.map((project) => project.wardNumber))

  return wards
    .filter((ward) => covered.has(ward.ward_number))
    .map((ward) => ({
      value: ward.ward_number,
      label: `Ward ${ward.ward_number} · ${ward.name}`,
    }))
}
