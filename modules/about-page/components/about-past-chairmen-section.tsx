import React from "react"

import { pastGovernmentApi, withFallback } from "@/lib/api"
import {
  toPastOfficeholders,
  toTimelineColumns,
  type PastOfficeholder,
} from "@/modules/about-page/past-government.utils"

/**
 * The roll the council published before the API carried it. Kept as a fallback
 * so the page does not lose thirty years of history while
 * `GET /past-government` is still empty; the API wins the moment it has rows.
 *
 * Periods and designations are pre-formatted here because the API models a
 * term by its start date alone and cannot express "ACT CHAIRMAN" or "H.L.G.A".
 */
const FALLBACK_ROLL: PastOfficeholder[] = [
  ["1989", "HON. M.B FATUNBI", "Elected"],
  ["1989 - 1990", "MRS. S. O SARUMI", "Sole Administrator"],
  ["1991 - 1993", "HON. ELDER C. WOLE OYELESE", "Elected"],
  ["1994 - 1996", "MAJOR MRS. MASAKU (RTD.)", "Caretaker"],
  ["1997", "MR. ADEMOLA ADELAKUN", "Sole Administrator"],
  ["1997 - 1999", "HON. LATE M. OYALEKE", "Elected"],
  ["1999", "MR. T. OJETUNDE", "Sole Administrator"],
  ["1999 - 2002", "HON. AKINADE ALAMU", "Elected"],
  ["1999 - 2002", "HON. MUFUTAU A. OYEWO", "Caretaker"],
  ["2002 - 2003", "MR. SEGUN OYEDIRAN", "Caretaker"],
  ["2004 - 2006", "HON. CHIEF SUNBO OYEDIJO", "Caretaker"],
  ["2006 - 2007", "HON. (ENGR.) KOLAWOLE OKE", "Acting Chairman"],
  ["2007", "HON. K.K OBISESAN", "Caretaker"],
  ["2007", "HON. (ENGR.) KOLAWOLE OKE", "Caretaker"],
  ["2007 - DEC. 2007", "HON. MR. WAHEED AMUZAT", "Caretaker"],
  ["DEC. 2007 - DEC. 2010", "HON. (ENGR.) KOLAWOLE OKE", "Elected"],
  ["MAY 2014 - 30TH MAY 2015", "HON. K.K OBISESAN", ""],
  ["7TH MARCH 2016 - DEC. 2016", "HON. ADEMOLA ADEWUYI", "Caretaker"],
  ["7TH APRIL 2017 - 14TH MAY 2018", "HON. SODIQ AKINTUNDE AKEEM", "Caretaker"],
  ["14TH MAY 2018 - 29TH MAY 2019", "HON. SODIQ AKINTUNDE AKEEM", "Elected"],
  ["29TH MAY 2019 - 23RD DEC. 2019", "ALHAJA A.A ADEPOJU", "H.L.G.A"],
  ["23RD DEC. 2019 - 31ST JAN. 2020", "HON. SANDA SIKIRU OYEDELE", "Caretaker"],
  [
    "31ST JAN 2020 - 17TH MARCH 2021",
    "HON. DOCTOR AMOS OLADELE O",
    "Caretaker",
  ],
  ["24TH MAY 2021 - TILL DATE", "HON. SANDA SIKIRU OYEDELE", "Elected"],
].map(([period, name, typeLabel], index) => ({
  id: `fallback-${index}`,
  period,
  name,
  typeLabel,
}))

export async function AboutPastChairmenSection() {
  const roll = await withFallback(
    () => pastGovernmentApi.list({ limit: 100 }),
    { items: [], meta: { page: 1, limit: 100, total: 0, totalPages: 0 } },
    "past government"
  )

  const officeholders = roll.items.length
    ? toPastOfficeholders(roll.items)
    : FALLBACK_ROLL

  const columns = toTimelineColumns(officeholders)

  return (
    <section className="border-b border-gray-100 bg-[#FAF8F9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl space-y-4">
          {/* Pill Badge */}
          <div>
            <span className="inline-block rounded-full border border-[#7A1F331A] bg-[#7A1F33]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#7A1F33] uppercase">
              OUR PAST GOVERNMENT
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-[#131313] sm:text-4xl">
            Past Chairmen in Egbeda Local Government
          </h2>
        </div>

        {/* 3 Columns Timeline Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="relative space-y-6">
              {col.map((item) => (
                <div key={item.id} className="group flex items-start gap-3.5">
                  {/* Timeline Dot */}
                  <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#7A1F33] transition-transform group-hover:scale-125" />

                  {/* Content */}
                  <div>
                    <span className="mb-0.5 block text-[11px] font-extrabold tracking-wider text-[#7A1F33] uppercase">
                      {item.period}
                    </span>
                    <h3 className="font-heading text-xs leading-snug font-extrabold text-[#131313] transition-colors group-hover:text-[#7A1F33] sm:text-sm">
                      {item.name}
                    </h3>
                    {item.typeLabel && (
                      <span className="mt-1 inline-block rounded-full bg-[#7A1F33]/10 px-2 py-0.5 text-[10px] font-bold text-[#7A1F33]">
                        {item.typeLabel}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
