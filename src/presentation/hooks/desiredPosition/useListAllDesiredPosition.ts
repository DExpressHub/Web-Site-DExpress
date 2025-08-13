'use client'
import { useQuery } from '@tanstack/react-query'

import { desiredPositionUseCase } from '@/presentation/factories/useCase/desiredPosition'
import { queriesKey } from '@/presentation/queriesKey'

export function useListAllDesiredPosition() {
  const { data, error, isError } = useQuery({
    queryKey: [queriesKey.desiredPosition],
    queryFn: async () => {
      const result = await desiredPositionUseCase.listAll.execute()

      if (!result.success) {
        throw result.error
      }

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24,
    retry: 2,
  })

  return {
    desiredPosition: data ?? [],
    error,
    isError,
  }
}
