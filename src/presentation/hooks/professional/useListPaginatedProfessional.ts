'use client'

import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'

import { professionalUseCase } from '@/presentation/factories/useCase/professionals'
import { queriesKey } from '@/presentation/queriesKey'
import { FiltersProfessional } from '@/core/types/professional'
import { getQueryClient } from '@/presentation/utils/queryClient'

export function useListPaginatedProfessional(filters: FiltersProfessional, shouldFetch: boolean) {
  const { data, error, isError, isLoading, isFetching } = useQuery({
    queryKey: [queriesKey.professionals, filters],
    queryFn: async () => {
      const result = await professionalUseCase.listAll.execute(filters)

      if (!result.success) {
        toast.error('Erro ao buscar processionais tenta mais tarde')
        getQueryClient().invalidateQueries({
          queryKey: [queriesKey.professionals, filters],
        })
        throw result.error
      }

      return result.data
    },

    enabled: shouldFetch,
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutos
    gcTime: 10 * 60 * 1000, // 10 minutos (novo nome para cacheTime)
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
  })

  return {
    result: data,
    error,
    isError,
    isLoading,
    isFetching,
  }
}
