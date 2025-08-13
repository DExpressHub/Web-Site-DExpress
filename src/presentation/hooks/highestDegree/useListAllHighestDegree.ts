'use client'

import { useQuery } from '@tanstack/react-query'

import { highestDegreeUseCase } from '@/presentation/factories/useCase/highestDegree'
import { queriesKey } from '@/presentation/queriesKey'

export function useListAllHighestDegree() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queriesKey.highestDegree],
    queryFn: async () => {
      const result = await highestDegreeUseCase.listAll.execute()

      if (!result.success) return []

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24, // 24h cache
    retry: 2,
  })

  return {
    highestDegrees: data ?? [],
    isLoading,
    isError,
  }
}
