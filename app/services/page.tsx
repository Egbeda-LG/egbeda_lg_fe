import type { Metadata } from "next"
import { ServicesPage } from "@/modules/services/services-page"

export const metadata: Metadata = {
  title: "Citizen Services | Egbeda Local Government",
  description:
    "Explore citizen services offered by Egbeda Local Government Area — marriage registration, business permits, birth certificates, environment clearance, health, waste management, and hall rentage.",
}

export default function Page() {
  return <ServicesPage />
}
