import React from "react"
import Image from "next/image"
import Link from "next/link"
import { RiArrowRightLine } from "@remixicon/react"

import {
  NEWS_FILTERS,
  categoryHref,
  type NewsCard,
} from "@/modules/newsroom/newsroom.utils"

interface NewsroomContentSectionProps {
  articles: NewsCard[]
  /** The API category currently filtered on, or "all". */
  activeCategory: string
}

export function NewsroomContentSection({
  articles,
  activeCategory,
}: NewsroomContentSectionProps) {
  const [featured, ...rest] = articles
  const topRight = rest.slice(0, 3)
  const grid = rest.slice(3)

  return (
    <section className="border-b border-gray-100 bg-[#FAF8F9] py-12 md:py-20">
      <div className="mx-auto max-w-7xl space-y-10 px-4 md:px-8">
        {/* Filter Categories Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {NEWS_FILTERS.map((filter) => (
            <Link
              key={filter.value}
              href={categoryHref(filter.value)}
              scroll={false}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                activeCategory === filter.value
                  ? "bg-[#7A1F33] text-white shadow-xs"
                  : "border border-[#7A1F331A] bg-white text-[#7A1F33] hover:bg-[#FFF7F8]"
              }`}
            >
              {filter.label}
            </Link>
          ))}
        </div>

        {!featured ? (
          <p className="rounded-2xl border border-gray-100/90 bg-white p-10 text-center font-sans text-sm text-[#6A7181]">
            No articles have been published in this category yet.
          </p>
        ) : (
          <>
            {/* Featured Section Grid: Left Main Featured + Right 3 List */}
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
              {/* Left Column: Featured Main Article Card */}
              <Link
                href={featured.href}
                className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-gray-100/90 bg-white p-6 shadow-xs transition-all hover:shadow-md lg:col-span-6"
              >
                <div>
                  {/* Featured Image */}
                  <div className="relative mb-6 h-64 w-full overflow-hidden rounded-2xl bg-gray-100 sm:h-80">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>

                  {/* Category & Date */}
                  <div className="mb-2 flex items-center gap-2 text-xs">
                    <span className="text-[11px] font-extrabold tracking-wider text-[#7A1F33] uppercase">
                      {featured.categoryLabel}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-[11px] font-medium text-[#6A7181]">
                      {featured.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mb-3 font-heading text-xl leading-snug font-extrabold text-[#131313] transition-colors group-hover:text-[#7A1F33] sm:text-2xl">
                    {featured.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="mb-6 font-sans text-xs leading-relaxed text-[#6A7181] sm:text-sm">
                    {featured.excerpt}
                  </p>
                </div>

                {/* Read More Link */}
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A1F33] transition-all group-hover:gap-2 sm:text-sm">
                    <span>Read more</span>
                    <RiArrowRightLine size={16} />
                  </span>
                </div>
              </Link>

              {/* Right Column: 3 Top List Items */}
              <div className="space-y-6 lg:col-span-6">
                {topRight.map((item) => (
                  <NewsroomArticleCard key={item.id} article={item} />
                ))}
              </div>
            </div>

            {/* 2-Column Grid of Remaining Articles */}
            {grid.length > 0 && (
              <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2">
                {grid.map((item) => (
                  <NewsroomArticleCard key={item.id} article={item} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

function NewsroomArticleCard({ article }: { article: NewsCard }) {
  return (
    <Link
      href={article.href}
      className="group flex flex-col items-start gap-5 rounded-2xl border border-gray-100/90 bg-white p-5 shadow-xs transition-all hover:shadow-md sm:flex-row sm:items-center"
    >
      {/* Thumbnail Image */}
      <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-28 sm:w-44">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 640px) 100vw, 180px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        {/* Category & Date */}
        <div className="mb-1 flex items-center gap-2 text-xs">
          <span className="text-[10px] font-extrabold tracking-wider text-[#7A1F33] uppercase">
            {article.categoryLabel}
          </span>
          <span className="text-gray-300">•</span>
          <span className="text-[10px] font-medium text-[#6A7181]">
            {article.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-1.5 line-clamp-2 font-heading text-sm leading-snug font-bold text-[#131313] transition-colors group-hover:text-[#7A1F33] sm:text-base">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-2 line-clamp-2 font-sans text-xs leading-relaxed text-[#6A7181]">
          {article.excerpt}
        </p>

        <span className="inline-flex items-center gap-1 text-xs font-bold text-[#7A1F33] transition-all group-hover:gap-1.5">
          <span>Read more</span>
          <RiArrowRightLine size={14} />
        </span>
      </div>
    </Link>
  )
}
