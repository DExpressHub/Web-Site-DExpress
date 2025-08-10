// src/presentation/hooks/generalAvailability/useListAllGeneralAvailabilities.ts

'use client'

import { useQuery } from '@tanstack/react-query'

import { generalAvailabilityUseCase } from '@/presentation/factories/useCase/generalAvailability'
import { queriesKey } from '@/presentation/queriesKey'

export function useListAllGeneralAvailabilities() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queriesKey.generalAvailabilities],
    queryFn: async () => {
      const result = await generalAvailabilityUseCase.listAll.execute()

      if (!result.success) return []

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24,
    retry: false,
  })

  return {
    generalAvailabilities: data ?? [],
    isLoading,
    isError,
  }
}
