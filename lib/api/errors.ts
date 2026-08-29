const DEFAULT_ERROR_MESSAGE = "Something went wrong. Please try again."

export class ApiError extends Error {
  readonly status?: number
  readonly payload?: unknown

  constructor(
    message: string,
    status?: number,
    payload?: unknown,
    options?: { cause?: unknown }
  ) {
    super(message, options)
    this.name = "ApiError"
    this.status = status
    this.payload = payload
  }

  /** A missing record, as opposed to an outage - callers render a 404 for it. */
  get isNotFound() {
    return this.status === 404
  }
}

export function getApiErrorMessage(
  error: unknown,
  fallback = DEFAULT_ERROR_MESSAGE
) {
  if (error instanceof ApiError) return error.message
  if (error instanceof Error && error.message.trim()) return error.message

  return fallback
}
