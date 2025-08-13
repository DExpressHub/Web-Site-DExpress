'use client'

import { useQuery } from '@tanstack/react-query'

import { genderUseCase } from '@/presentation/factories/useCase/gender'
import { queriesKey } from '@/presentation/queriesKey'

export function useListAllGender() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queriesKey.gender],
    queryFn: async () => {
      const result = await genderUseCase.listAll.execute()

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
