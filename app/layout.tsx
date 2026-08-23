import type { Metadata } from "next"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { TopBar } from "@/components/layout/top-bar"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Egbeda",
  description: "Egbeda Website",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/svgs/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/svgs/logo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background font-sans text-[#6A7181] antialiased">
        <ThemeProvider>
          <TopBar />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
