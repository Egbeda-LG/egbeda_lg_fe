import type { ProjectItem, WardItem } from "@/lib/api"
import { PLACEHOLDER_IMAGE, formatDateRange } from "@/lib/content"

/**
 * The API's `status` records whether a project is published, not how far along
 * it is — so delivery progress is read off the schedule instead.
 */
export type DeliveryStage = "completed" | "ongoing" | "upcoming"

const STAGE_STYLES: Record<
  DeliveryStage,
  { label: string; className: string }
> = {
  completed: { label: "COMPLETED", className: "bg-[#059669]" },
  ongoing: { label: "ONGOING", className: "bg-[#D9A300]" },
  upcoming: { label: "UPCOMING", className: "bg-[#7A1F33]" },
}

export function deliveryStage(
  project: ProjectItem,
  now = new Date()
): DeliveryStage {
  const start = project.start_date ? new Date(project.start_date) : null
  const end = project.end_date ? new Date(project.end_date) : null

  if (end && !Number.isNaN(end.getTime()) && end < now) return "completed"
  if (start && !Number.isNaN(start.getTime()) && start > now) return "upcoming"

  return "ongoing"
}

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
  stage: DeliveryStage
  stageLabel: string
  stageClassName: string
}

export function toProjectCard(project: ProjectItem): ProjectCard {
  const stage = deliveryStage(project)
  const { label, className } = STAGE_STYLES[stage]

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
    stage,
    stageLabel: label,
    stageClassName: className,
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
