'use client'

import { useQuery } from '@tanstack/react-query'

import { languagesUseCase } from '@/presentation/factories/useCase/language'
import { queriesKey } from '@/presentation/queriesKey'

export function useListAllLanguages() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queriesKey.languages],
    queryFn: async () => {
      const result = await languagesUseCase.listAll.execute()

      if (!result.success) return []

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    retry: 2,
  })

  return {
    languages: data ?? [],
    isLoading,
    isError,
  }
}
