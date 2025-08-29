'use client'
import { useQuery } from '@tanstack/react-query'

import { queriesKey } from '@/utils/queriesKey'
import { listAllPlansAction } from '@/actions/plan'

export function useListAllPlans() {
  const { data, error, isError } = useQuery({
    queryKey: [queriesKey.plans],
    queryFn: async () => {
      const result = await listAllPlansAction()

      if (!result.success) {
        throw result.error
      }

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24,
    retry: 2,
  })

  return {
    plans: data ?? [],
    error,
    isError,
  }
}
