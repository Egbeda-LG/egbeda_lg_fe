import { ProjectsContentSection } from "./components/projects-content-section"
import { ProjectsHeroSection } from "./components/projects-hero-section"

export function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <ProjectsHeroSection />
      <ProjectsContentSection />
    </main>
  )
}
