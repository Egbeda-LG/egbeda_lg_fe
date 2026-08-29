import React from "react"
import Image from "next/image"
import Link from "next/link"
import { RiArrowRightLine } from "@remixicon/react"

import { newsApi, withFallback } from "@/lib/api"
import { toNewsCards } from "@/modules/newsroom/newsroom.utils"

export async function NewsSection() {
  const news = await withFallback(
    () => newsApi.list({ limit: 5 }),
    { items: [], meta: { page: 1, limit: 5, total: 0, totalPages: 0 } },
    "landing news"
  )

  const [featuredNews, ...newsList] = toNewsCards(news.items)

  if (!featuredNews) return null

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
          <Link
            href={featuredNews.href}
            className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gray-100/90 bg-white p-6 shadow-xs transition-all hover:shadow-md lg:col-span-6"
          >
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
                  {featuredNews.categoryLabel}
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
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A1F33] transition-all group-hover:gap-2">
                <span>Read more</span>
                <RiArrowRightLine size={14} />
              </span>
            </div>
          </Link>

          {/* Right Column: 4 Small News Items List */}
          <div className="space-y-6 lg:col-span-6">
            {newsList.map((item) => (
              <Link
                key={item.id}
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
                      {item.categoryLabel}
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
