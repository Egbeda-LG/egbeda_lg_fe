import React from "react"
import Link from "next/link"
import { RiArrowRightLine } from "@remixicon/react"

import { servicesApi, withFallback, type ServiceItem } from "@/lib/api"
import { toServiceCards } from "@/modules/services/services.utils"

const DEFAULT_SERVICES: ServiceItem[] = [
  {
    _id: "service-1",
    name: "Marriage Registry & Civil Union",
    short_description:
      "Register marriages, obtain official civil certificates, and verify existing licenses.",
    description:
      "Official marriage registration and civil certificates at Egbeda Local Government Secretariat.",
    department: "Administration & General Services",
    timeline: "3 - 5 business days",
    eligibility: [],
    required_documents: [],
    application_process: [],
    status: "published",
    is_featured: true,
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "service-2",
    name: "Business Premises & Trade Permit",
    short_description:
      "Apply for or renew your commercial trade license and SME operating permits.",
    description:
      "Business premise permits and commercial registration for SMEs across Egbeda LGA.",
    department: "Finance & Supplies",
    timeline: "2 - 4 business days",
    eligibility: [],
    required_documents: [],
    application_process: [],
    status: "published",
    is_featured: true,
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "service-3",
    name: "Birth & Age Attestation Certificate",
    short_description:
      "Obtain formal birth registration documents and age declarations for official use.",
    description:
      "Birth registration and age declarations issued by the council registry.",
    department: "Administration & General Services",
    timeline: "Same day - 48 hours",
    eligibility: [],
    required_documents: [],
    application_process: [],
    status: "published",
    is_featured: true,
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "service-4",
    name: "Waste Clearance & Sanitation Permit",
    short_description:
      "Schedule municipal refuse collection and request commercial waste inspections.",
    description:
      "Environmental sanitation clearance, scheduled waste collection, and hygiene certificates.",
    department: "Environment & Health Services",
    timeline: "1 - 3 business days",
    eligibility: [],
    required_documents: [],
    application_process: [],
    status: "published",
    is_featured: true,
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "service-5",
    name: "Market Stall Allocation & Shop Lease",
    short_description:
      "Register for public market stalls, lockup shops, and trading spaces in council markets.",
    description:
      "Allocation and leasing of retail market stalls across municipal markets in Egbeda.",
    department: "Finance & Supplies",
    timeline: "5 - 7 business days",
    eligibility: [],
    required_documents: [],
    application_process: [],
    status: "published",
    is_featured: true,
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "service-6",
    name: "Community Hall & Venue Booking",
    short_description:
      "Reserve public event venues, council town halls, and community civic centres.",
    description:
      "Booking civic centres and town halls for community events, receptions, and meetings.",
    department: "Works & Housing",
    timeline: "Immediate confirmation",
    eligibility: [],
    required_documents: [],
    application_process: [],
    status: "published",
    is_featured: true,
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "service-7",
    name: "Primary Health & Maternal Care",
    short_description:
      "Access maternal health checkups, infant immunisations, and community wellness care.",
    description:
      "Consultation, routine immunization, and primary care services across council health centres.",
    department: "Primary Healthcare",
    timeline: "Walk-in / Same day",
    eligibility: [],
    required_documents: [],
    application_process: [],
    status: "published",
    is_featured: true,
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "service-8",
    name: "Building Plan Approval & Permits",
    short_description:
      "Submit architectural plans for zoning compliance and civil engineering review.",
    description:
      "Statutory building plan approvals and structural safety permits in Egbeda LGA.",
    department: "Works & Housing",
    timeline: "7 - 14 business days",
    eligibility: [],
    required_documents: [],
    application_process: [],
    status: "published",
    is_featured: true,
    createdAt: "",
    updatedAt: "",
  },
]

export async function ServicesSection() {
  const response = await withFallback(
    () => servicesApi.list({ limit: 8 }),
    {
      items: DEFAULT_SERVICES,
      meta: { page: 1, limit: 8, total: 8, totalPages: 1 },
    },
    "landing services"
  )

  const items = response.items.length > 0 ? response.items : DEFAULT_SERVICES
  const services = toServiceCards(items)

  if (services.length === 0) return null

  return (
    <section
      id="services"
      className="border-t border-b border-gray-100 bg-[#FAF8F9] py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-4">
            {/* Pill Badge */}
            <div>
              <span className="inline-block rounded-full border border-[#7A1F331A] bg-[#7A1F33]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
                QUICK ACCESS
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-[#131313] sm:text-4xl">
              Citizen services, one click away.
            </h2>

            {/* Subtitle */}
            <p className="font-sans text-base leading-relaxed text-[#6A7181]">
              Everything residents need most, organized for speed: apply,
              register, and pay without a trip to the office.
            </p>
          </div>

          {/* View All Services Link */}
          <div className="shrink-0 pb-1">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#7A1F33] transition-colors hover:text-[#5d1625] hover:underline"
            >
              <span>View all services</span>
              <RiArrowRightLine size={16} />
            </Link>
          </div>
        </div>

        {/* 4x2 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const IconComponent = service.Icon
            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between rounded-2xl border border-gray-100/90 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  {/* Icon Badge */}
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#7A1F33]/10 bg-[#FAF0E6] text-[#7A1F33] shadow-xs transition-all duration-200 group-hover:scale-105 group-hover:bg-[#7A1F33] group-hover:text-[#FAF0E6] group-hover:shadow-sm">
                    <IconComponent
                      size={22}
                      className="transition-colors duration-200"
                    />
                  </div>

                  {/* Card Title */}
                  <h3 className="mb-2 font-heading text-base leading-snug font-bold text-[#131313]">
                    {service.title}
                  </h3>

                  {/* Card Description */}
                  <p className="mb-6 font-sans text-xs leading-relaxed text-[#6A7181]">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
