import type { Metadata } from "next"
import { NewsroomPage } from "@/modules/newsroom/newsroom-page"

export const metadata: Metadata = {
  title: "News & Events | Egbeda Local Government",
  description:
    "Latest announcements, project updates, educational initiatives, health outreaches, and community events straight from Egbeda Local Government, Oyo State.",
}

export default function Page() {
  return <NewsroomPage />
}
