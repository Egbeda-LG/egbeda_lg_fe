import Reactotron from "reactotron-react-js"

/**
 * Reactotron client for the browser half of the app — the navbar, the contact
 * form, and anything else marked `"use client"`. Server components report
 * separately from `lib/reactotron/server.ts`.
 */
let started = false

export function startBrowserReactotron() {
  if (started || typeof window === "undefined") return

  started = true

  try {
    Reactotron.configure({
      name: "Egbeda Website · browser",
      host: process.env.NEXT_PUBLIC_REACTOTRON_HOST ?? "localhost",
    }).connect()

    // Makes the client reachable from the devtools console as `tron.log(…)`.
    ;(window as typeof window & { tron?: typeof Reactotron }).tron = Reactotron
  } catch (error) {
    console.warn("[reactotron] browser client failed to start:", error)
  }
}
