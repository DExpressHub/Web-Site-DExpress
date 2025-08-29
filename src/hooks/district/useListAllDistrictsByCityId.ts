'use client'
import { useQuery } from '@tanstack/react-query'

import { queriesKey } from '@/utils/queriesKey'
import { listAllDistrictsByCityIdAction } from '@/actions/districts/listAllDistrictsByCityId'

export function useListAllDistrictsByIdCity(cityId: string, shouldFetch: boolean) {
  const { data, error, isError, isFetching } = useQuery({
    queryKey: [queriesKey.districts, cityId],
    queryFn: async () => {
      const result = await listAllDistrictsByCityIdAction(cityId)

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
