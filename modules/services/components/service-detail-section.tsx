import React from "react"

import type { ContactAndSupport, ServiceItem } from "@/lib/api"

interface ServiceDetailSectionProps {
  service: ServiceItem
  contact?: Partial<ContactAndSupport>
}

export function ServiceDetailSection({
  service,
  contact,
}: ServiceDetailSectionProps) {
  return (
    <div className="border-b border-gray-100 bg-[#FAF8F9] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Main Service Detail Card */}
        <div className="space-y-10 rounded-3xl border border-gray-100/90 bg-white p-6 shadow-sm sm:p-10 md:p-12">
          {/* 1. Overview */}
          {service.description && (
            <section className="space-y-3">
              <h2 className="font-heading text-xl font-extrabold text-[#131313] sm:text-2xl">
                Overview
              </h2>
              <p className="font-sans text-xs leading-relaxed whitespace-pre-line text-[#6A7181] sm:text-sm">
                {service.description}
              </p>
            </section>
          )}

          {/* 2. Eligibility */}
          <DetailList
            heading="Eligibility"
            lead="You may apply if:"
            items={service.eligibility}
          />

          {/* 3. Required Documents */}
          <DetailList
            heading="Required Documents"
            lead="Applicants should provide the following:"
            items={service.required_documents}
          />

          {/* 4. Application Process */}
          {service.application_process?.length > 0 && (
            <section className="space-y-3">
              <h2 className="font-heading text-xl font-extrabold text-[#131313] sm:text-2xl">
                Application Process
              </h2>
              <div className="space-y-2 font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
                {service.application_process.map((step, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="shrink-0 font-bold text-[#131313]">
                      Step {index + 1}:
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 5. Office Information */}
          <section className="space-y-4 pt-2">
            <h2 className="font-heading text-xl font-extrabold text-[#131313] sm:text-2xl">
              Office Information
            </h2>

            <div className="grid grid-cols-1 gap-6 font-sans text-xs sm:text-sm md:grid-cols-2">
              {/* Department & Address */}
              <div className="space-y-1">
                <span className="block font-bold text-[#131313]">
                  {service.department || "Egbeda Local Government"}
                </span>
                <span className="block text-[#6A7181]">
                  {contact?.headquater_address ??
                    "Egbeda Local Government Secretariat"}
                </span>
              </div>

              {/* Office Hours & Timeline */}
              <div className="space-y-1">
                <span className="block font-bold text-[#131313]">
                  Office Hours
                </span>
                <span className="block text-[#6A7181]">
                  {contact?.weekdays ?? "Monday – Friday"}
                </span>
                <span className="block text-[#6A7181]">
                  {contact?.hours ?? "8:00 AM – 4:00 PM"}
                </span>
                <span className="block text-[#6A7181]">
                  Public Holidays: Closed
                </span>
                {service.timeline && (
                  <span className="block pt-1 text-[#6A7181]">
                    Processing time:{" "}
                    <span className="font-bold text-[#131313]">
                      {service.timeline}
                    </span>
                  </span>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function DetailList({
  heading,
  lead,
  items,
}: {
  heading: string
  lead: string
  items?: string[]
}) {
  if (!items?.length) return null

  return (
    <section className="space-y-3">
      <h2 className="font-heading text-xl font-extrabold text-[#131313] sm:text-2xl">
        {heading}
      </h2>
      <p className="font-sans text-xs font-semibold text-[#131313] sm:text-sm">
        {lead}
      </p>
      <ul className="list-disc space-y-2 pl-4 font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
