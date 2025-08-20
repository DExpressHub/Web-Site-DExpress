'use client'
import { useQuery } from '@tanstack/react-query'

import { planUseCase } from '@/presentation/factories/useCase/plan'
import { queriesKey } from '@/presentation/queriesKey'

export function useListAllPlans() {
  const { data, error, isError } = useQuery({
    queryKey: [queriesKey.plans],
    queryFn: async () => {
      const result = await planUseCase.listAll.execute()

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
