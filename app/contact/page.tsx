import type { Metadata } from "next"
import { ContactPage } from "@/modules/contact/contact-page"

export const metadata: Metadata = {
  title: "Get In Touch | Egbeda Local Government",
  description:
    "Write to the council, book a meeting, or reach an individual department at Egbeda Local Government Secretariat, Oyo State.",
}

export default function Page() {
  return <ContactPage />
}
