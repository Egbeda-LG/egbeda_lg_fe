import React from "react"

export function AboutHeroSection() {
  return (
    <section className="border-b border-gray-100 bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          {/* Left Hero Content */}
          <div className="max-w-2xl space-y-4">
            {/* Pill Badge */}
            <div>
              <span className="inline-block rounded-full border border-[#7A1F331A] bg-[#7A1F33]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
                ABOUT US
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-[#131313] sm:text-4xl lg:text-5xl">
              A council rooted in people, driven by progress.
            </h1>

            {/* Description */}
            <p className="font-sans text-sm leading-relaxed text-[#6A7181] sm:text-base">
              For three decades Egbeda Local Government has stood as a compact
              between citizens and the state — delivering services,
              infrastructure and opportunity across eleven communities in
              Ibadan.
            </p>
          </div>

          {/* Right Meta Tag */}
          <div className="shrink-0 pb-1 text-left md:text-right">
            <span className="mb-1 block text-[11px] font-extrabold tracking-widest text-[#6A7181] uppercase">
              EGBEDA LG
            </span>
            <div className="relative inline-block pb-1">
              <span className="font-heading text-sm font-bold text-[#131313] sm:text-base">
                Oyo State, Nigeria
              </span>
              <div className="absolute bottom-0 left-0 h-0.5 w-16 bg-[#D9A300] md:right-0 md:left-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
