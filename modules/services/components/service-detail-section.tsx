import React from "react"
import { RiArrowRightLine } from "@remixicon/react"

export function ServiceDetailSection() {
  // Service Data dictionary for Marriage Registration and others
  const serviceData = {
    title: "Marriage Registration",
    category: "CIVIL REGISTRATION",
    subtitle: "Book, register and collect marriage certificates",
    overview:
      "The Marriage Registry is responsible for conducting and registering statutory marriages within Egbeda Local Government. Couples who meet the legal requirements can apply for a marriage license and have their marriage solemnized by an authorized marriage registrar. Our goal is to ensure that every eligible couple enjoys a seamless, dignified, and legally recognized marriage registration process.",
    eligibility: [
      "Both parties are at least 21 years old, or have the required parental consent where applicable.",
      "Both parties willingly consent to the marriage.",
      "Neither party is currently married under statutory law.",
      "Both applicants possess valid means of identification.",
    ],
    documents: [
      "Completed marriage application form",
      "Birth certificates or age declarations (both applicants)",
      "Valid means of identification (National ID, International Passport, Driver's Licence, or Voter's Card)",
      "Two recent passport photographs for each applicant",
      "Proof of residential address",
      "Sworn affidavit of bachelorhood/spinsterhood (if required)",
      "Divorce decree or death certificate of former spouse (where applicable)",
    ],
    steps: [
      "Complete the online or physical application form.",
      "Upload or submit all required supporting documents.",
      "Pay the prescribed registration fee.",
      "Attend document verification at the Marriage Registry.",
      "Publication of the Notice of Marriage as required by law.",
      "Attend the scheduled marriage solemnization ceremony.",
      "Receive your official Marriage Certificate.",
    ],
    fees: [
      { label: "Marriage Registration", amount: "₦XX,XXX" },
      { label: "Certified Marriage Certificate", amount: "₦X,XXX" },
      { label: "Certificate Replacement", amount: "₦X,XXX" },
    ],
    unit: "Marriage Registry Unit",
    secretariat: "Egbeda Local Government Secretariat",
    hours: "Monday – Friday",
    time: "8:00 AM – 4:00 PM",
    holidays: "Public Holidays: Closed",
  }

  return (
    <div className="border-b border-gray-100 bg-[#FAF8F9] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Main Service Detail Card */}
        <div className="space-y-10 rounded-3xl border border-gray-100/90 bg-white p-6 shadow-sm sm:p-10 md:p-12">
          {/* 1. Overview */}
          <div className="space-y-3">
            <h2 className="font-heading text-xl font-extrabold text-[#131313] sm:text-2xl">
              Overview
            </h2>
            <p className="font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
              {serviceData.overview}
            </p>
          </div>

          {/* 2. Eligibility */}
          <div className="space-y-3">
            <h2 className="font-heading text-xl font-extrabold text-[#131313] sm:text-2xl">
              Eligibility
            </h2>
            <p className="font-sans text-xs font-semibold text-[#131313] sm:text-sm">
              You may apply if:
            </p>
            <ul className="list-disc space-y-2 pl-4 font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
              {serviceData.eligibility.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 3. Required Documents */}
          <div className="space-y-3">
            <h2 className="font-heading text-xl font-extrabold text-[#131313] sm:text-2xl">
              Required Documents
            </h2>
            <p className="font-sans text-xs font-semibold text-[#131313] sm:text-sm">
              Applicants should provide the following:
            </p>
            <ul className="list-disc space-y-2 pl-4 font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
              {serviceData.documents.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>

          {/* 4. Application Process */}
          <div className="space-y-3">
            <h2 className="font-heading text-xl font-extrabold text-[#131313] sm:text-2xl">
              Application Process
            </h2>
            <div className="space-y-2 font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
              {serviceData.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="shrink-0 font-bold text-[#131313]">
                    Step {index + 1}:
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Service fee */}
          <div className="space-y-3">
            <h2 className="font-heading text-xl font-extrabold text-[#131313] sm:text-2xl">
              Service fee
            </h2>
            <div className="space-y-1.5 font-sans text-xs sm:text-sm">
              {serviceData.fees.map((fee, index) => (
                <div key={index} className="text-[#6A7181]">
                  <span>{fee.label}: </span>
                  <span className="font-bold text-[#131313]">{fee.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Office Information */}
          <div className="space-y-4 pt-2">
            <h2 className="font-heading text-xl font-extrabold text-[#131313] sm:text-2xl">
              Office Information
            </h2>

            <div className="grid grid-cols-1 gap-6 font-sans text-xs sm:text-sm md:grid-cols-2">
              {/* Unit & Address */}
              <div className="space-y-1">
                <span className="block font-bold text-[#131313]">
                  {serviceData.unit}
                </span>
                <span className="block text-[#6A7181]">
                  {serviceData.secretariat}
                </span>
              </div>

              {/* Office Hours */}
              <div className="space-y-1">
                <span className="block font-bold text-[#131313]">
                  Office Hours
                </span>
                <span className="block text-[#6A7181]">
                  {serviceData.hours}
                </span>
                <span className="block text-[#6A7181]">{serviceData.time}</span>
                <span className="block text-[#6A7181]">
                  {serviceData.holidays}
                </span>
              </div>
            </div>
          </div>

          {/* 7. Action Button */}
          <div className="pt-4">
            <button className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#D9A300] px-8 py-3 text-xs font-bold text-white shadow-2xs transition-colors hover:bg-[#c29200] sm:text-sm">
              <span>Apply now</span>
              <RiArrowRightLine size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
