'use client'
import { useQuery } from '@tanstack/react-query'

import { specialtyUseCase } from '@/presentation/factories/useCase/specialty'
import { queriesKey } from '@/presentation/queriesKey'

export function useListAllSpecialties() {
  const { data, error, isError } = useQuery({
    queryKey: [queriesKey.specialties],
    queryFn: async () => {
      const result = await specialtyUseCase.listAll.execute()

      if (!result.success) {
        throw result.error
      }

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24,
    retry: false,
  })

  return {
    specialties: data ?? [],
    error,
    isError,
  }
}
