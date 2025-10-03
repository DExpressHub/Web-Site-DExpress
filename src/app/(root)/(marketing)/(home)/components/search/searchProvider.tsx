'use client'

import React, { useMemo, useCallback, useState, createContext, useContext } from 'react'

import { SearchFormData } from './searchFormSchema'

import { FiltersProfessional, PaginatedProfissionalResponse } from '@/types/professional'
import { useListPaginatedProfessional } from '@/hooks/professional/useListPaginatedProfessional'

type SearchContextValue = {
  filters: FiltersProfessional
  hasSearched: boolean
  setFilters: React.Dispatch<React.SetStateAction<FiltersProfessional>>
  onSubmit: (data: SearchFormData) => void

  error: Error | null
  isError: boolean
  result: PaginatedProfissionalResponse | undefined
  isFetching: boolean
}

const SearchContext = createContext<SearchContextValue | null>(null)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<FiltersProfessional>({ limit: 3 })
  const [hasSearched, setHasSearched] = useState(true)

  const { error, isError, result, isFetching } = useListPaginatedProfessional(filters, hasSearched)
  const onSubmit = useCallback((data: SearchFormData) => {
    setFilters({
      limit: 3,
      availabilityTypeId: data.availability === 'all' ? undefined : data.availability,
      cityId: data.city === 'all' ? undefined : data.city,
      desiredPositionId: data.desiredPosition === 'all' ? undefined : data.desiredPosition,
    })
    setHasSearched(true)
  }, [])

  // Valor do contexto
  const value: SearchContextValue = useMemo(
    () => ({
      filters,
      setFilters,
      hasSearched,
      onSubmit,
      error,
      isError,
      result,
      isFetching,
    }),
    [filters, hasSearched, onSubmit, error, isError, result],
  )

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

export function useSearch() {
  const context = useContext(SearchContext)

  if (!context) throw new Error('useSearch must be used within a SearchProvider')

  return context
}
