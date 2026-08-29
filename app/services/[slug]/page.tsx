import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { servicesApi } from "@/lib/api"
import { excerpt, idFromSlug } from "@/lib/content"
import {
  JsonLd,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  breadcrumbSchema,
  pageMetadata,
} from "@/lib/seo"
import { ServiceDetailPage } from "@/modules/services/service-detail-page"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

/** Service URLs are `<name-slug>-<id>`; the id on the end is the lookup key. */
async function loadService(slug: string) {
  const id = idFromSlug(slug)

  if (!id) return null

  return servicesApi.findById(id)
}

function serviceDescription(service: {
  name: string
  short_description?: string
  description?: string
}) {
  return (
    service.short_description ||
    excerpt(service.description, 160) ||
    `Requirements, eligibility and application process for ${service.name} at ${SITE_NAME}.`
  )
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = await loadService(slug)

  if (!service) {
    return {
      title: "Service not found | Egbeda Local Government",
      robots: { index: false, follow: true },
    }
  }

  return pageMetadata({
    title: `${service.name} | Egbeda Local Government Services`,
    description: serviceDescription(service),
    path: `/services/${slug}`,
  })
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const service = await loadService(slug)

  if (!service) notFound()

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    name: service.name,
    description: serviceDescription(service),
    url: absoluteUrl(`/services/${slug}`),
    serviceType: service.department || undefined,
    provider: {
      "@type": "GovernmentOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Egbeda Local Government Area, Oyo State",
    },
    audience: { "@type": "Audience", audienceType: "Residents of Egbeda" },
    ...(service.application_process?.length
      ? { serviceOutput: service.application_process.join(" ") }
      : {}),
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Citizen Services", path: "/services" },
          { name: service.name, path: `/services/${slug}` },
        ])}
      />
      <ServiceDetailPage service={service} />
    </>
  )
}
