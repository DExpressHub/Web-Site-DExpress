'use client'
import { useQuery } from '@tanstack/react-query'

import { getCitiesUseCaseFactory } from '@/presentation/factories/getCities'
import { queriesKey } from '@/presentation/queriesKey'

export function useCitiesQuery() {
  const { data } = useQuery({
    queryKey: [queriesKey.cities],
    queryFn: async () => {
      const result = await getCitiesUseCaseFactory().execute()

      if (!result.success) {
        return []
      }

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24,
    retry: false,
  })

  return {
    cities: data ?? [],
  }
}
