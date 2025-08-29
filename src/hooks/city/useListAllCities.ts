'use client'
import { useQuery } from '@tanstack/react-query'

import { queriesKey } from '@/utils/queriesKey'
import { listAllCitiesAction } from '@/actions/city'

export function useListAllCities() {
  const { data, error, isError } = useQuery({
    queryKey: [queriesKey.cities],
    queryFn: async () => {
      const result = await listAllCitiesAction()

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
