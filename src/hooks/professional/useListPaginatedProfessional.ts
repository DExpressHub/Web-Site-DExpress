'use client'

import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'

import { queriesKey } from '@/utils/queriesKey'
import { FiltersProfessional } from '@/types/professional'
import { getQueryClient } from '@/utils/queryClient'
import { listPaginatedProfessionalAction } from '@/actions/professional'

export function useListPaginatedProfessional(filters: FiltersProfessional, shouldFetch: boolean) {
  const { data, error, isError, isLoading, isFetching } = useQuery({
    queryKey: [queriesKey.professionals, filters],
    queryFn: async () => {
      const result = await listPaginatedProfessionalAction(filters)

      if (!result.success) {
        toast.error('Erro ao buscar processionais tenta mais tarde')
        getQueryClient().invalidateQueries({
          queryKey: [queriesKey.professionals, filters],
        })
        getQueryClient().invalidateQueries({
          queryKey: [queriesKey.professionals],
        })
        throw result.error
      }

      return result.data
    },

    enabled: shouldFetch,
    retry: false,
    staleTime: 5 * 60 * 1000,
  })

  return {
    result: data,
    error,
    isError,
    isLoading,
    isFetching,
  }
}
