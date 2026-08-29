"use client"

import { useEffect } from "react"

/**
 * Starts the browser Reactotron client once, in development only.
 *
 * The import is dynamic and sits behind a `NODE_ENV` check, so the production
 * build folds this to a no-op and never pulls Reactotron into a client chunk.
 */
export function ReactotronProvider() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") return

    import("@/lib/reactotron/browser")
      .then(({ startBrowserReactotron }) => startBrowserReactotron())
      .catch(() => {
        // Reactotron is a dev dependency; its absence must never break the app.
      })
  }, [])

  return null
}
