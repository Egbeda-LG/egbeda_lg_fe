import {
  MANAGEMENT_OFFICE_OPTIONS,
  NULGE_OFFICE_OPTIONS,
  optionLabel,
  type CouncillorItem,
  type ManagementItem,
  type NulgeItem,
  type SocialMediaLink,
} from "@/lib/api"
import { placementImage } from "@/lib/content"

/** A person as the government pages render them, whatever list they came from. */
export type OfficialCard = {
  id: string
  name: string
  role: string
  photo?: string
  description?: string
  social: SocialMediaLink[]
  isVacant: boolean
}

/** Councillors are listed by ward, lowest ward number first. */
export function toCouncillorRows(councillors: CouncillorItem[] = []) {
  return councillors
    .map((councillor) => ({
      id: councillor._id,
      name: councillor.name,
      role: "Councillor",
      ward: councillor.ward?.ward_number
        ? `Ward ${councillor.ward.ward_number}`
        : "—",
      wardNumber: councillor.ward?.ward_number ?? "",
      area: councillor.ward?.name ?? "—",
      photo: placementImage(councillor.images, "government"),
      social: councillor.social_media ?? [],
      isVacant: councillor.status?.toLowerCase() === "vacant",
    }))
    .sort((a, b) => a.wardNumber.localeCompare(b.wardNumber))
}

export function toManagementCard(item: ManagementItem): OfficialCard {
  return {
    id: item._id,
    name: item.name,
    role: optionLabel(MANAGEMENT_OFFICE_OPTIONS, item.office),
    photo: item.photo_url || undefined,
    description: item.description,
    social: item.social_media ?? [],
    isVacant: false,
  }
}

export function toNulgeCard(item: NulgeItem): OfficialCard {
  return {
    id: item._id,
    name: item.name,
    role: optionLabel(NULGE_OFFICE_OPTIONS, item.office),
    photo: placementImage(item.images, "government"),
    social: item.social_media ?? [],
    isVacant: item.status?.toLowerCase() === "vacant",
  }
}

/** Keeps the union executives in their constitutional order of office. */
export function sortByOffice<T extends { office: string }>(
  items: T[],
  order: { value: string }[]
) {
  const rank = new Map(order.map((option, index) => [option.value, index]))

  return [...items].sort(
    (a, b) =>
      (rank.get(a.office) ?? Number.MAX_SAFE_INTEGER) -
      (rank.get(b.office) ?? Number.MAX_SAFE_INTEGER)
  )
}
