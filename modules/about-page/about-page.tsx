import { StatsSection } from "@/components/stats-section"
import { CommunitiesSection } from "@/components/communities-section"
import { AboutChairmanSection } from "./components/about-chairman-section"
import { AboutHeroSection } from "./components/about-hero-section"
import { AboutPastChairmenSection } from "./components/about-past-chairmen-section"
import { AboutProfileSection } from "./components/about-profile-section"
import { AboutSectorsSection } from "./components/about-sectors-section"
import { AboutValuesSection } from "./components/about-values-section"

export function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHeroSection />
      <AboutProfileSection />
      <AboutSectorsSection />
      <AboutValuesSection />
      <AboutChairmanSection />
      <AboutPastChairmenSection />
      <CommunitiesSection />
      <StatsSection />
    </main>
  )
}
