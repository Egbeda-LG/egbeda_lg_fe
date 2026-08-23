import React from "react"
import Image from "next/image"
import Link from "next/link"
import { RiArrowRightLine } from "@remixicon/react"

export function NewsSection() {
  const featuredNews = {
    category: "EVENT AND CEREMONIES",
    date: "JAN 30, 2026",
    title:
      "Egbeda LG Chairman, Sanda Sikiru, Leads Vibrant Carnival Procession As Oyo State Celebrates 50th Anniversary",
    excerpt:
      "The streets of Ibadan came alive with color and music as the Executive Chairman of Egbeda Local Govt and Chairman of the Association of Local Government of Nigeria (ALGON) Oyo State chapter, Hon. Sanda Sikiru Oyedele LAJUE, led ...",
    image: "/images/news-featured-carnival.jpg",
    href: "/newsroom/egbeda-lg-chairman-sanda-sikiru-leads-vibrant-carnival-procession",
  }

  const newsList = [
    {
      category: "EDUCATION",
      date: "FEB 18, 2026",
      title:
        "Anti-Cultism Campaign to Egbeda Schools, Free WAEC/JAMB Initiative",
      excerpt:
        "The administration of Hon. Sikiru Sanda, through Operation Campus Storm (O.C.S.), organized a comprehensive anti-cultism campaign.",
      image: "/images/news-school-campaign.jpg",
      href: "/newsroom",
    },
    {
      category: "HEALTH",
      date: "JAN 29, 2026",
      title: "Hon. Sanda Leads Free Medical Outreach To Grassroots.",
      excerpt:
        "The Egbeda local govt organized a day free Medical Outreach to Grassroots held at Alakia/Olode Primary Health Care Centre and Alakia pr...",
      image: "/images/news-medical-outreach.jpg",
      href: "/newsroom",
    },
    {
      category: "CASH EMPOWERMENT",
      date: "FEB 26, 2026",
      title: "Hon. Sanda Disburses Development Funds To CDA's,",
      excerpt:
        "The Executive Chairman of Egbeda Local Govt Hon Sikiru Oyedele has commenced the 2026...",
      image: "/images/news-cda-funds.jpg",
      href: "/newsroom",
    },
    {
      category: "GRASSROOTS INFRASTRUCTURE",
      date: "DEC 5, 2025",
      title: "Hon. Sanda Flags Off Agoro Junction–Nigerian Breweries Road",
      excerpt:
        "Development in Egbeda Local Government has received another boost as the Executive Chairman, Hon. Sanda Oyedele Sikiru officially b...",
      image: "/images/news-road-flagoff.jpg",
      href: "/newsroom",
    },
  ]

  return (
    <section
      id="newsroom"
      className="border-t border-b border-gray-100 bg-[#FAF8F9] py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-4">
            {/* Pill Badge */}
            <div>
              <span className="inline-block rounded-full border border-[#7A1F331A] bg-[#7A1F33]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
                NEWSROOM
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-[#131313] sm:text-4xl">
              Latest from the council.
            </h2>

            {/* Subtitle */}
            <p className="font-sans text-base leading-relaxed text-[#6A7181]">
              Announcements, project updates and community events — straight
              from the council.
            </p>
          </div>

          {/* Go to Newsroom Link */}
          <div className="shrink-0 pb-1">
            <Link
              href="/newsroom"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#7A1F33] transition-colors hover:text-[#5d1625] hover:underline"
            >
              <span>Go to Newsroom</span>
              <RiArrowRightLine size={16} />
            </Link>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: Featured News Card */}
          <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gray-100/90 bg-white p-6 shadow-xs transition-all hover:shadow-md lg:col-span-6">
            <div>
              {/* Featured Image */}
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-xl bg-gray-100 sm:h-72">
                <Image
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Category & Date */}
              <div className="mb-2 flex items-center gap-2 text-xs">
                <span className="text-[11px] font-extrabold tracking-wider text-[#7A1F33] uppercase">
                  {featuredNews.category}
                </span>
                <span className="text-gray-300">•</span>
                <span className="text-[11px] font-medium text-[#6A7181]">
                  {featuredNews.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-3 font-heading text-lg leading-snug font-extrabold text-[#131313] transition-colors group-hover:text-[#7A1F33] sm:text-xl">
                {featuredNews.title}
              </h3>

              {/* Excerpt */}
              <p className="mb-6 font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
                {featuredNews.excerpt}
              </p>
            </div>

            {/* Read More Link */}
            <div>
              <Link
                href={featuredNews.href}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A1F33] transition-all group-hover:gap-2"
              >
                <span>Read more</span>
                <RiArrowRightLine size={14} />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Small News Items List */}
          <div className="space-y-6 lg:col-span-6">
            {newsList.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group flex flex-col items-start gap-4 rounded-2xl border border-gray-100/90 bg-white p-4 shadow-xs transition-all hover:shadow-md sm:flex-row sm:items-center sm:gap-5 sm:p-5"
              >
                {/* Thumbnail Image */}
                <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-24 sm:w-36">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 150px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  {/* Category & Date */}
                  <div className="mb-1 flex items-center gap-2 text-xs">
                    <span className="text-[10px] font-extrabold tracking-wider text-[#7A1F33] uppercase">
                      {item.category}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-[10px] font-medium text-[#6A7181]">
                      {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="mb-1.5 line-clamp-2 font-heading text-sm leading-snug font-bold text-[#131313] transition-colors group-hover:text-[#7A1F33]">
                    {item.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="line-clamp-2 font-sans text-xs leading-relaxed text-[#6A7181]">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
