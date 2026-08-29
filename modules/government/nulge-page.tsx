import { NulgeContentSection } from "./components/nulge-content-section"
import { NulgeHeroSection } from "./components/nulge-hero-section"
import { FadeIn } from "@/components/fade-in"
import { NULGE_OFFICE_OPTIONS, nulgeApi, withFallback } from "@/lib/api"
import {
  sortByOffice,
  toNulgeCard,
} from "@/modules/government/government.utils"

export async function NulgePage() {
  /*
   * Unfiltered on purpose: a vacant union seat is public information, and the
   * page marks it as such rather than hiding the office.
   */
  const nulge = await withFallback(
    () => nulgeApi.list({ limit: 60, status: "all" }),
    { items: [], meta: { page: 1, limit: 60, total: 0, totalPages: 0 } },
    "NULGE list"
  )

  const officers = sortByOffice(nulge.items, NULGE_OFFICE_OPTIONS).map(
    toNulgeCard
  )

  return (
    <main className="min-h-screen">
      <FadeIn>
        <NulgeHeroSection
          seated={officers.filter((officer) => !officer.isVacant).length}
          vacant={officers.filter((officer) => officer.isVacant).length}
        />
      </FadeIn>
      <FadeIn>
        <NulgeContentSection officers={officers} />
      </FadeIn>
    </main>
  )
}
