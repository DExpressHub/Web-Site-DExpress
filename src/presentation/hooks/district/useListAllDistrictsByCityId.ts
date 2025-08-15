'use client'
import { useQuery } from '@tanstack/react-query'

import { districtUseCase } from '@/presentation/factories/useCase/district'
import { queriesKey } from '@/presentation/queriesKey'

export function useListAllDistrictsByIdCity(cityId: string, shouldFetch: boolean) {
  const { data, error, isError, isFetching } = useQuery({
    queryKey: [queriesKey.districts, cityId],
    queryFn: async () => {
      const result = await districtUseCase.listAllDistrictsByCityId.execute(cityId)

      if (!result.success) {
        throw result.error
      }

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24,
    retry: 2,
    enabled: shouldFetch,
  })

  return {
    districts: data ?? [],
    error,
    isError,
    isFetching,
  }
}
