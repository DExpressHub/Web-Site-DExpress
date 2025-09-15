'use client'

import React from 'react'
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
  QueryObserverResult,
  RefetchOptions,
} from '@tanstack/react-query'

import { FiltersProfessional, PaginatedProfissionalResponse } from '@/types/professional'
import { useInfiniteProfessionals } from '@/hooks/professional/useInfiniteProfessionals'

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
  handleChange: (e: { name: string; value: string }) => void
  resetFilters: () => void
  isFetchingNextPage: boolean
  isLoading: boolean
  isError: boolean
}

const FiltersContext = React.createContext<null | FiltersContextValue>(null)

export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const initialFilters: Omit<FiltersProfessional, 'page'> = {
    limit: 10,
  }

  const [filters, setFilters] = React.useState(initialFilters)

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

  const handleChange = React.useCallback((e: { name: string; value: string }) => {
    const { name, value } = e

    setFilters((prev) => ({
      ...prev,
      [name]: value === 'all' ? undefined : value,
    }))
  }, [])

  // 🔹 Função de reset
  const resetFilters = React.useCallback(() => {
    setFilters(initialFilters)
  }, [])

  const value: FiltersContextValue = React.useMemo(
    () => ({
      filters,
      handleChange,
      resetFilters,
      data,
      fetchNextPage,
      hasNextPage,
      isFetching,
      refetch,
      isFetchingNextPage,
      isLoading,
      isError,
    }),
    [
      filters,
      data,
      fetchNextPage,
      hasNextPage,
      isFetching,
      refetch,
      isFetchingNextPage,
      isLoading,
      isError,
      resetFilters,
    ],
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
