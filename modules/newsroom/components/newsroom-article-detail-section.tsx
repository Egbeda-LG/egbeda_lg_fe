import React from "react"
import Image from "next/image"
import Link from "next/link"
import { RiArrowRightLine } from "@remixicon/react"

import type { NewsItem } from "@/lib/api"
import {
  PLACEHOLDER_IMAGE,
  coverImageFromHtml,
  formatCardDate,
} from "@/lib/content"
import { NEWS_CATEGORY_OPTIONS, optionLabel } from "@/lib/api"
import type { NewsCard } from "@/modules/newsroom/newsroom.utils"

interface NewsroomArticleDetailSectionProps {
  article: NewsItem
  related: NewsCard[]
}

export function NewsroomArticleDetailSection({
  article,
  related,
}: NewsroomArticleDetailSectionProps) {
  const cover = coverImageFromHtml(article.content) ?? PLACEHOLDER_IMAGE

  return (
    <section className="border-b border-gray-100 bg-[#FAF8F9] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Main Article Container */}
          <article className="space-y-6 rounded-3xl border border-gray-100/90 bg-white p-6 shadow-sm sm:p-10 lg:col-span-7">
            {/* Category & Date Header */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
              <span>{formatCardDate(article.createdAt)}</span>
              <span>•</span>
              <span>
                {optionLabel(NEWS_CATEGORY_OPTIONS, article.category)}
              </span>
            </div>

            {/* Article Title */}
            <h1 className="font-heading text-2xl leading-tight font-extrabold text-[#131313] sm:text-3xl">
              {article.title}
            </h1>

            {/* Featured Image */}
            <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gray-100 shadow-2xs sm:h-96">
              <Image
                src={cover}
                alt={article.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />
            </div>

            {/*
              Body markup comes from the council's own admin editor, which is
              the only writer for this field.
            */}
            <div
              className="article-body pt-2"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>

          {/* Right Column: Related News */}
          <div className="space-y-6 lg:col-span-5">
            <h2 className="font-heading text-xl font-extrabold text-[#131313]">
              Related News
            </h2>

            {related.length === 0 ? (
              <p className="rounded-2xl border border-gray-100/90 bg-white p-6 font-sans text-xs text-[#6A7181]">
                No related stories yet.{" "}
                <Link href="/newsroom" className="font-bold text-[#7A1F33]">
                  Browse the newsroom
                </Link>
                .
              </p>
            ) : (
              <div className="space-y-5">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="group flex flex-col items-start gap-4 rounded-2xl border border-gray-100/90 bg-white p-5 shadow-xs transition-all hover:shadow-md sm:flex-row sm:items-center"
                  >
                    {/* Thumbnail Image */}
                    <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:w-36">
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
                      <div className="mb-1 flex items-center gap-2 text-xs">
                        <span className="text-[10px] font-extrabold tracking-wider text-[#7A1F33] uppercase">
                          {item.categoryLabel}
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="text-[10px] font-medium text-[#6A7181]">
                          {item.date}
                        </span>
                      </div>

                      <h3 className="mb-1.5 line-clamp-2 font-heading text-sm leading-snug font-bold text-[#131313] transition-colors group-hover:text-[#7A1F33]">
                        {item.title}
                      </h3>

                      <p className="mb-2 line-clamp-2 font-sans text-xs leading-relaxed text-[#6A7181]">
                        {item.excerpt}
                      </p>

                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#7A1F33] transition-all group-hover:gap-1.5">
                        <span>Read more</span>
                        <RiArrowRightLine size={14} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
