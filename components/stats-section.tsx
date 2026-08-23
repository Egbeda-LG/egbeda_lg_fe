import React from "react"
import {
  RiUserLine,
  RiGraduationCapLine,
  RiStore2Line,
  RiHeartLine,
  RiMapPin2Line,
  RiBriefcaseLine,
} from "@remixicon/react"

export function StatsSection() {
  const stats = [
    {
      icon: RiUserLine,
      value: "412,000",
      label: "Population",
    },
    {
      icon: RiGraduationCapLine,
      value: "58",
      label: "Public Schools",
    },
    {
      icon: RiStore2Line,
      value: "9",
      label: "Markets",
    },
    {
      icon: RiHeartLine,
      value: "12",
      label: "Health Centres",
    },
    {
      icon: RiMapPin2Line,
      value: "140",
      label: "Kilometres of Roads",
    },
    {
      icon: RiBriefcaseLine,
      value: "620",
      label: "Staff Strength",
    },
  ]

  return (
    <section
      id="snapshot"
      className="relative overflow-hidden bg-[#7A1F33] py-16 text-white md:py-24"
    >
      {/* Subtle Warm Gradient Accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,163,0,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center md:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl space-y-4">
          {/* Pill Badge */}
          <div>
            <span className="inline-block rounded-full border border-[#D9A300]/30 bg-black/25 px-5 py-2 text-xs font-bold tracking-widest text-[#D9A300] uppercase shadow-xs">
              EGBEDA IN NUMBER
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A Snapshot of our Community
          </h2>
        </div>

        {/* 6 Stats Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/20 p-6 text-center backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:p-7"
              >
                {/* Icon */}
                <IconComponent
                  size={24}
                  className="mb-3 text-[#D9A300] transition-transform group-hover:scale-110"
                />

                {/* Number Value */}
                <div className="my-1 font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="mt-1 font-sans text-xs font-medium text-white/70">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
