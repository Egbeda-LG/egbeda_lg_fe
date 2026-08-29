import { ProjectsContentSection } from "./components/projects-content-section"
import { ProjectsHeroSection } from "./components/projects-hero-section"
import { FadeIn } from "@/components/fade-in"
import { projectsApi, wardsApi, withFallback } from "@/lib/api"
import {
  filterByWard,
  toProjectCards,
  wardFilters,
} from "@/modules/projects/projects.utils"

interface ProjectsPageProps {
  ward?: string
}

export async function ProjectsPage({ ward = "all" }: ProjectsPageProps) {
  const [projects, wards] = await Promise.all([
    withFallback(
      () => projectsApi.list({ limit: 60 }),
      { items: [], meta: { page: 1, limit: 60, total: 0, totalPages: 0 } },
      "projects list"
    ),
    withFallback(() => wardsApi.list(), [], "wards list"),
  ])

  const cards = toProjectCards(projects.items)

  return (
    <main className="min-h-screen">
      <FadeIn>
        <ProjectsHeroSection
          total={projects.meta.total || cards.length}
          wardsCovered={projects.stats?.wards_covered}
          totalWards={projects.stats?.total_wards ?? wards.length}
        />
      </FadeIn>
      <FadeIn>
        <ProjectsContentSection
          projects={filterByWard(cards, ward)}
          wards={wardFilters(cards, wards)}
          activeWard={ward}
        />
      </FadeIn>
    </main>
  )
}
