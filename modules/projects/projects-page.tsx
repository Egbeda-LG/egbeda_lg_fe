import { ProjectsContentSection } from "./components/projects-content-section"
import { ProjectsHeroSection } from "./components/projects-hero-section"
import { FadeIn } from "@/components/fade-in"

export function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <FadeIn>
        <ProjectsHeroSection />
      </FadeIn>
      <FadeIn>
        <ProjectsContentSection />
      </FadeIn>
    </main>
  )
}
