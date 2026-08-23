import React from "react"
import Image from "next/image"

export function AboutProfileSection() {
  return (
    <section className="border-b border-gray-100 bg-[#FAF8F9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Text Profile & Key Metrics */}
          <div className="space-y-6 lg:col-span-6">
            {/* Pill Badge */}
            <div>
              <span className="inline-block rounded-full border border-[#7A1F331A] bg-[#7A1F33]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
                OUR PROFILE
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-[#131313] sm:text-4xl">
              A landscape of enterprise and heritage.
            </h2>

            {/* Paragraph 1 */}
            <p className="font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
              Egbeda Local Government, with headquarters at Egbeda, was carved
              out from the defunct Lagelu Local Government in 1989. The creation
              of Local Council Development Areas (LCDs) in Oyo State was
              approved on August 23rd, 2016 and signed into law on October 6,
              2016 by former Governor Abiola Ajimobi.
            </p>

            {/* Paragraph 2 */}
            <p className="font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
              This legislation created 35 LCDAs out of the existing 33
              constitutionally recognized Local Government Areas (LGAs) to
              accelerate grassroots development, which Ajorosun LCDA was carved
              out from Egbeda Local Government. LCDAs were created to bring
              government closer to the people, they are essentially
              administrative outposts and do not receive direct funding from the
              Federation Account like the 33 statutory LGAs.
            </p>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-3 gap-3 pt-4 sm:gap-4">
              {/* Metric 1 */}
              <div className="rounded-2xl border border-gray-100/90 bg-white/80 p-4 text-left shadow-2xs backdrop-blur-xs">
                <div className="font-heading text-xl font-extrabold tracking-tight text-[#131313] sm:text-2xl">
                  1989
                </div>
                <div className="mt-1 text-[10px] font-extrabold tracking-wider text-[#6A7181] uppercase">
                  YEAR ESTABLISHED
                </div>
              </div>

              {/* Metric 2 */}
              <div className="rounded-2xl border border-gray-100/90 bg-white/80 p-4 text-left shadow-2xs backdrop-blur-xs">
                <div className="font-heading text-xl font-extrabold tracking-tight text-[#131313] sm:text-2xl">
                  420.75
                </div>
                <div className="mt-1 text-[10px] font-extrabold tracking-wider text-[#6A7181] uppercase">
                  SQ KM LANDMASS
                </div>
              </div>

              {/* Metric 3 */}
              <div className="rounded-2xl border border-gray-100/90 bg-white/80 p-4 text-left shadow-2xs backdrop-blur-xs">
                <div className="font-heading text-xl font-extrabold tracking-tight text-[#131313] sm:text-2xl">
                  11
                </div>
                <div className="mt-1 text-[10px] font-extrabold tracking-wider text-[#6A7181] uppercase">
                  WARDS
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Secretariat Gate & Building Image */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg overflow-hidden rounded-3xl border border-gray-100 bg-gray-100 shadow-xl lg:max-w-none">
              <Image
                src="/images/about-profile-gate.jpg"
                alt="Egbeda Local Government Secretariat Main Entrance Gate and Building"
                width={960}
                height={1280}
                className="h-auto max-h-[580px] w-full object-cover transition-transform duration-500 hover:scale-102"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
