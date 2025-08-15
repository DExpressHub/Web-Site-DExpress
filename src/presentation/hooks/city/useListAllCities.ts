'use client'
import { useQuery } from '@tanstack/react-query'

import { cityUseCase } from '@/presentation/factories/useCase/city'
import { queriesKey } from '@/presentation/queriesKey'

export function useListAllCities() {
  const { data, error, isError } = useQuery({
    queryKey: [queriesKey.cities],
    queryFn: async () => {
      const result = await cityUseCase.listAll.execute()

      if (!result.success) {
        throw result.error
      }

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24,
    retry: 2,
  })

  return {
    cities: data ?? [],
    error,
    isError,
  }
}
