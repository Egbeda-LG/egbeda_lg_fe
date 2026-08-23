import type { Metadata } from "next"
import { LandmarksAndCulturePage } from "@/modules/government/landmarks-and-culture-page"

export const metadata: Metadata = {
  title: "Landmarks and Culture | Egbeda Local Government",
  description:
    "Explore major industrial landmarks, marriage registry, Temidire Plank Market, and Iwo Road Bus Terminal defining culture and employment in Egbeda Local Government, Oyo State.",
}

export default function Page() {
  return <LandmarksAndCulturePage />
}
