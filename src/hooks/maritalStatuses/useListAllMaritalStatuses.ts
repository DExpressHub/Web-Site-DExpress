'use client'

import { useQuery } from '@tanstack/react-query'

import { queriesKey } from '@/utils/queriesKey'
import { listAllMaritalStatusesAction } from '@/actions/maritalStatuses'

export function useListAllMaritalStatuses() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queriesKey.martialStatus],
    queryFn: async () => {
      const result = await listAllMaritalStatusesAction()

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
