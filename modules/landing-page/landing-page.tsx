import { AboutSection } from "./components/about-section"
import { StatsSection } from "@/components/stats-section"
import { ChairmanSection } from "./components/chairman-section"
import { DepartmentsSection } from "./components/departments-section"
import { HeroSection } from "./components/hero-section"
import { NewsSection } from "./components/news-section"
import { ProjectsSection } from "./components/projects-section"
import { ServicesSection } from "./components/services-section"

export function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ChairmanSection />
      <DepartmentsSection />
      <ProjectsSection />
      <StatsSection />
      <NewsSection />
    </main>
  )
}
