'use client'

import { useQuery } from '@tanstack/react-query'

import { queriesKey } from '@/utils/queriesKey'
import { listAllHighestDegreesAction } from '@/actions/highestDegree'

export function useListAllHighestDegree() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queriesKey.highestDegree],
    queryFn: async () => {
      const result = await listAllHighestDegreesAction()

      if (!result.success) return []

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24,
    retry: 2,
  })

  return {
    highestDegrees: data ?? [],
    isLoading,
    isError,
  }
}
