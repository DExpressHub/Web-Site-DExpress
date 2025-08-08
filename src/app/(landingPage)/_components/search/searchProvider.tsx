'use client'

import React, { useMemo } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormData, searchFormSchema } from './searchFormSchema'

import { useProfessionalQuery } from '@/presentation/hooks/useProfessionalsQuery'
import { GetProfessionalsResponse } from '@/core/interfaces/professionals'
import { useCitiesQuery } from '@/presentation/hooks/useCitiesQuery'
import { useSpecialtiesQuery } from '@/presentation/hooks/useSpecialtiesQuery'

type SearchContextValue = {
  result?: {
    data: GetProfessionalsResponse
    success: true
    error?: never
  }
  isLoading: boolean
  onSubmit: (data: SearchFormData) => void
  form: UseFormReturn<
    {
      city?: string | undefined
      specialty?: string | undefined
      availability?: string | undefined
    },
    any,
    undefined
  >
  isError: boolean
  error: Error | null
  citiesOptions: {
    value: string
    label: string
  }[]
  specialtiesOptions: {
    value: string
    label: string
  }[]
}
type SearchParams = {
  cityId?: string
  specialtyIds?: string
  availabilityType?: string
}
const SearchContext = React.createContext<null | SearchContextValue>(null)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchPrams, setSearchParams] = React.useState<SearchParams | undefined>(undefined)
  const { result, isLoading, isError, error } = useProfessionalQuery(searchPrams)
  const form = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      city: undefined,
      specialty: undefined,
      availability: undefined,
    },
  })
  const { cities } = useCitiesQuery()
  const citiesOptions = React.useMemo(
    () => [
      { value: 'all', label: 'Todas' },
      ...cities.map((city) => ({ value: city.id, label: city.name })),
    ],
    [],
  )
  const { specialties } = useSpecialtiesQuery()
  const specialtiesOptions = React.useMemo(
    () => [
      { value: 'all', label: 'Todas' },
      ...specialties.map((city) => ({ value: city.id, label: city.name })),
    ],
    [],
  )
  const onSubmit = React.useCallback((data: SearchFormData) => {
    setSearchParams({
      availabilityType: data.availability,
      cityId: data.city,
      specialtyIds: data.specialty,
    })
  }, [])

  const value = useMemo(
    () => ({
      result,
      isLoading,
      onSubmit,
      form,
      isError,
      error,
      citiesOptions,
      specialtiesOptions,
    }),
    [result, isLoading, onSubmit, form, isError, error],
  )

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

export function useSearch() {
  const context = React.useContext(SearchContext)

  if (context === null) {
    throw new Error('useSearch must be used within a SearchProvider')
  }

  return context
}
