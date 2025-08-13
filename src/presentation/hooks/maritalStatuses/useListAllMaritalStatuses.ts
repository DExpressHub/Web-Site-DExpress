'use client'

import { useQuery } from '@tanstack/react-query'

import { maritalStatusesUseCase } from '@/presentation/factories/useCase/maritalStatuses'
import { queriesKey } from '@/presentation/queriesKey'

export function useListAllMaritalStatuses() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queriesKey.martialStatus],
    queryFn: async () => {
      const result = await maritalStatusesUseCase.listAll.execute()

      if (!result.success) return []

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24,
    retry: 2,
  })

  return {
    maritalStatuses: data ?? [],
    isLoading,
    isError,
  }
}
