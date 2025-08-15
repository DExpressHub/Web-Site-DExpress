'use client'

import { useQuery } from '@tanstack/react-query'

import { experienceLevelsUseCase } from '@/presentation/factories/useCase/experienceLevel'
import { queriesKey } from '@/presentation/queriesKey'

export function useListAllExperienceLevels() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queriesKey.experienceLevels],
    queryFn: async () => {
      const result = await experienceLevelsUseCase.listAll.execute()

      if (!result.success) return []

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    retry: 2,
  })

  return {
    experienceLevels: data ?? [],
    isLoading,
    isError,
  }
}
