import type { ServiceItem } from "@/lib/api"
import { excerpt, toDetailSlug } from "@/lib/content"
import {
  resolveServiceIcon,
  type ServiceIconComponent,
} from "@/components/service-icons"

export function serviceIcon(service: ServiceItem): ServiceIconComponent {
  return resolveServiceIcon(service.name, service.department)
}

/** The flattened shape the catalog cards render. */
export type ServiceCard = {
  id: string
  title: string
  href: string
  description: string
  department: string
  timeline: string
  Icon: ServiceIconComponent
}

export function toServiceCard(service: ServiceItem): ServiceCard {
  return {
    id: service._id,
    title: service.name,
    href: `/services/${toDetailSlug(service.name, service._id)}`,
    description: service.short_description || excerpt(service.description, 120),
    department: service.department || "Egbeda Local Government",
    timeline: service.timeline || "Enquire at the secretariat",
    Icon: serviceIcon(service),
  }
}

export function toServiceCards(services: ServiceItem[] = []): ServiceCard[] {
  return services.map(toServiceCard)
}
