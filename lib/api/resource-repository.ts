import { apiFetch, type FetchOptions } from "@/lib/api/client"
import { ApiError } from "@/lib/api/errors"
import { listQuery } from "@/lib/api/list-query"
import type {
  ListQuery,
  PaginatedResponse,
  PaginationMeta,
  RawPaginationMeta,
} from "@/lib/api/types"

export type ListResult<TItem, TStats = never> = {
  items: TItem[]
  meta: PaginationMeta
  stats?: TStats
}

/** `page` and `limit` come back as strings, and `page` is absent when unsent. */
export function toPaginationMeta(
  meta: RawPaginationMeta | undefined,
  fallbackLimit: number
): PaginationMeta {
  return {
    page: Number(meta?.page ?? 1) || 1,
    limit: Number(meta?.limit ?? fallbackLimit) || fallbackLimit,
    total: meta?.total ?? 0,
    totalPages: meta?.total_pages ?? 0,
  }
}

type RepositoryOptions = {
  /** Merged under every list query - e.g. only published records. */
  defaultQuery?: ListQuery
}

type ReadOptions = Pick<FetchOptions, "signal">

/**
 * Read-only counterpart to the admin app's `createResourceRepository`. The
 * public site never writes, so only the two GET shapes are exposed.
 */
export function createReadRepository<TItem, TStats = never>(
  resource: string,
  path: string,
  { defaultQuery }: RepositoryOptions = {}
) {
  async function list(
    query: ListQuery = {},
    options: ReadOptions = {}
  ): Promise<ListResult<TItem, TStats>> {
    const params = listQuery({ ...defaultQuery, ...query })

    const response = await apiFetch<PaginatedResponse<TItem, TStats>>(path, {
      params,
      signal: options.signal,
    })

    return {
      items: response?.data ?? [],
      meta: toPaginationMeta(response?.meta, params.limit ?? 10),
      stats: response?.stats,
    }
  }

  async function getById(id: string, options: ReadOptions = {}) {
    return apiFetch<TItem>(`${path}/${id}`, {
      signal: options.signal,
    })
  }

  /** Returns `null` for a record that does not exist, so pages can 404. */
  async function findById(id: string, options: ReadOptions = {}) {
    try {
      return await getById(id, options)
    } catch (error) {
      if (error instanceof ApiError && error.isNotFound) return null
      throw error
    }
  }

  return { resource, path, list, getById, findById }
}
