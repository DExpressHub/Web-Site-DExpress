'use client'

import { useQuery } from '@tanstack/react-query'

import { queriesKey } from '@/utils/queriesKey'
import { listAllGenderAction } from '@/actions/gender'

export function useListAllGender() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queriesKey.gender],
    queryFn: async () => {
      const result = await listAllGenderAction()

      if (!result.success) return []

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24,
    retry: 2,
  })

  return {
    genders: data ?? [],
    isLoading,
    isError,
  }
}
