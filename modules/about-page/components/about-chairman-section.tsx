import React from "react"
import Image from "next/image"

export function AboutChairmanSection() {
  return (
    <section className="border-b border-gray-100 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Chairman Photograph */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-gray-100 bg-gray-100 shadow-xl lg:max-w-none">
              <Image
                src="/images/about-chairman-mic.jpg"
                alt="Hon. Sanda Sikiru Oyedele - Executive Chairman, Egbeda Local Government"
                width={675}
                height={906}
                className="h-auto max-h-[560px] w-full object-cover transition-transform duration-500 hover:scale-102"
                priority
              />
            </div>
          </div>

          {/* Right Column: Bio & Track Record Metrics */}
          <div className="space-y-6 lg:col-span-7">
            {/* Pill Badge */}
            <div>
              <span className="inline-block rounded-full border border-[#7A1F331A] bg-[#7A1F33]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
                EXECUTIVE CHAIRMAN
              </span>
            </div>

            {/* Name & Title Subhead */}
            <div>
              <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-[#131313] sm:text-4xl">
                Hon. Sanda Sikiru Oyedele
              </h2>
              <span className="mt-1 block font-heading text-xs font-bold text-[#7A1F33] sm:text-sm">
                Executive Chairman · Egbeda Local Government
              </span>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4 font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
              <p>
                A public servant, lawyer and community advocate, Hon. Sanda
                Sikiru Oyedele has led Egbeda&apos;s most ambitious development
                cycle in a generation commissioning 22 primary health centres,
                launching the LG-wide solar streetlight programme, and
                instituting quarterly town halls in every ward.
              </p>
              <p>
                Before public office he practised law in Ibadan for 18 years and
                served on the boards of two community development foundations.
                He holds an LL.M from the University of Ibadan.
              </p>
            </div>

            {/* 3 Track Record Metric Cards */}
            <div className="grid grid-cols-3 gap-3 pt-4 sm:gap-4">
              {/* Metric 1 */}
              <div className="rounded-2xl border border-gray-100/90 bg-[#FAF8F9] p-4 text-left shadow-2xs sm:p-5">
                <div className="font-heading text-xl font-extrabold tracking-tight text-[#131313] sm:text-2xl">
                  3+
                </div>
                <div className="mt-1 text-[10px] font-extrabold tracking-wider text-[#6A7181] uppercase">
                  YEARS IN OFFICE
                </div>
              </div>

              {/* Metric 2 */}
              <div className="rounded-2xl border border-gray-100/90 bg-[#FAF8F9] p-4 text-left shadow-2xs sm:p-5">
                <div className="font-heading text-xl font-extrabold tracking-tight text-[#131313] sm:text-2xl">
                  47
                </div>
                <div className="mt-1 text-[10px] font-extrabold tracking-wider text-[#6A7181] uppercase">
                  PROJECTS DELIVERED
                </div>
              </div>

              {/* Metric 3 */}
              <div className="rounded-2xl border border-gray-100/90 bg-[#FAF8F9] p-4 text-left shadow-2xs sm:p-5">
                <div className="font-heading text-xl font-extrabold tracking-tight text-[#131313] sm:text-2xl">
                  18
                </div>
                <div className="mt-1 text-[10px] font-extrabold tracking-wider text-[#6A7181] uppercase">
                  TOWN HALLS HOSTED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
