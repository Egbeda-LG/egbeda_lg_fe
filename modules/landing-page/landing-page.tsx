import { AboutSection } from "./components/about-section"
import { AnthemSection } from "./components/anthem-section"
import { StatsSection } from "@/components/stats-section"
import { ChairmanSection } from "./components/chairman-section"
import { DepartmentsSection } from "./components/departments-section"
import { HeroSection } from "./components/hero-section"
import { NewsSection } from "./components/news-section"
import { ProjectsSection } from "./components/projects-section"
import { ServicesSection } from "./components/services-section"
import { FadeIn } from "@/components/fade-in"

export function LandingPage() {
  return (
    <main className="min-h-screen">
      <FadeIn>
        <HeroSection />
      </FadeIn>
      <FadeIn>
        <AboutSection />
      </FadeIn>
      <FadeIn>
        <ServicesSection />
      </FadeIn>
      <FadeIn>
        <ChairmanSection />
      </FadeIn>
      <FadeIn>
        <DepartmentsSection />
      </FadeIn>
      <FadeIn>
        <ProjectsSection />
      </FadeIn>
      <FadeIn>
        <StatsSection />
      </FadeIn>
      <FadeIn>
        <AnthemSection />
      </FadeIn>
      <FadeIn>
        <NewsSection />
      </FadeIn>
    </main>
  )
}
