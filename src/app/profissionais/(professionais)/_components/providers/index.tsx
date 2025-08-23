'use client'

import React from 'react'
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
  QueryObserverResult,
  RefetchOptions,
} from '@tanstack/react-query'

import { FiltersProfessional, PaginatedProfissionalResponse } from '@/core/types/professional'
import { useInfiniteProfessionals } from '@/presentation/hooks/professional/useInfiniteProfessionals'
type FiltersContextValue = {
  filters: FiltersProfessional

  data: InfiniteData<PaginatedProfissionalResponse, unknown> | undefined
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<
    InfiniteQueryObserverResult<InfiniteData<PaginatedProfissionalResponse, unknown>, Error>
  >
  hasNextPage: boolean
  isFetching: boolean
  refetch: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<InfiniteData<PaginatedProfissionalResponse, unknown>, Error>>
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  isFetchingNextPage: boolean
  isLoading: boolean
  isError: boolean
}
const FiltersContext = React.createContext<null | FiltersContextValue>(null)

export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = React.useState<Omit<FiltersProfessional, 'page'>>({
    limit: 10,
  })
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    refetch,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteProfessionals(filters, true)
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target

      setFilters((prev) => ({ ...prev, [name]: value }))
    },
    [],
  )
  const value: FiltersContextValue = React.useMemo(
    () => ({
      filters,
      handleChange,
      data,
      fetchNextPage,
      hasNextPage,
      isFetching,
      refetch,
      isFetchingNextPage,
      isLoading,
      isError,
    }),
    [filters, data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isLoading, isError],
  )

  return <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
}
export function useFilters() {
  const context = React.useContext(FiltersContext)

  if (!context) {
    throw new Error('useFilters must be used within a FiltersProvider')
  }

  return context
}
