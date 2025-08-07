import React from 'react'

import { SearchFormData } from './searchFormSchema'

import { useProfessionalQuery } from '@/presentation/hooks/useProfessionalsQuery'
type SearchParams = {
  cityId?: string
  specialtyIds?: string
  availabilityType?: string
}
export function useSearchForm() {
  const [searchPrams, setSearchParams] = React.useState<SearchParams | undefined>(undefined)

  const { result, isLoading } = useProfessionalQuery(searchPrams)

  const onSubmit = (data: SearchFormData) => {
    setSearchParams({
      availabilityType: data.availability,
      cityId: data.city,
      specialtyIds: data.specialty,
    })
  }

  return { result, isLoading, onSubmit }
}
