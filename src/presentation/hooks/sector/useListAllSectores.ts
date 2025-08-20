'use client'
import { useQuery } from '@tanstack/react-query'

import { queriesKey } from '@/presentation/queriesKey'
import { sectorUseCase } from '@/presentation/factories/useCase/sector'

export function useListAllSectores() {
  const { data, error, isError } = useQuery({
    queryKey: [queriesKey.sectores],
    queryFn: async () => {
      const result = await sectorUseCase.listAll.execute()

      if (!result.success) {
        throw result.error
      }

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24,
    retry: 2,
  })

  return {
    sectores: data ?? [],
    error,
    isError,
  }
}
