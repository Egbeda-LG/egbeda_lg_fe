import { StatsSection } from "@/components/stats-section"
import { CommunitiesSection } from "@/components/communities-section"
import { AboutChairmanSection } from "./components/about-chairman-section"
import { AboutHeroSection } from "./components/about-hero-section"
import { AboutPastChairmenSection } from "./components/about-past-chairmen-section"
import { AboutProfileSection } from "./components/about-profile-section"
import { AboutSectorsSection } from "./components/about-sectors-section"
import { AboutValuesSection } from "./components/about-values-section"
import { FadeIn } from "@/components/fade-in"

export function AboutPage() {
  return (
    <main className="min-h-screen">
      <FadeIn>
        <AboutHeroSection />
      </FadeIn>
      <FadeIn>
        <AboutProfileSection />
      </FadeIn>
      <FadeIn>
        <AboutSectorsSection />
      </FadeIn>
      <FadeIn>
        <AboutValuesSection />
      </FadeIn>
      <FadeIn>
        <AboutChairmanSection />
      </FadeIn>
      <FadeIn>
        <AboutPastChairmenSection />
      </FadeIn>
      <FadeIn>
        <CommunitiesSection />
      </FadeIn>
      <FadeIn>
        <StatsSection />
      </FadeIn>
    </main>
  )
}
