'use client'
import { useQuery } from '@tanstack/react-query'

import { queriesKey } from '../queriesKey'

import { getProfessionalsUseCaseFactory } from '@/presentation/factories/getProfessionals'
import { GetProfessionalsParams } from '@/core/interfaces/professionals'

export function useProfessionalQuery(params?: GetProfessionalsParams) {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: [queriesKey.professionals, params],
    queryFn: async () => {
      const useCase = getProfessionalsUseCaseFactory()
      const result = await useCase.execute(params)

      if (!result.success) throw new Error(result.error)

      return result
    },
    enabled: !!params,
    staleTime: 1000 * 60 * 24,
    refetchOnWindowFocus: false,
    retry: false,
  })

  return {
    result: data,
    error,
    isError,
    isLoading,
  }
}
