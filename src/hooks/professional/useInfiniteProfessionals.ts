'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { toast } from 'sonner'

import { queriesKey } from '@/utils/queriesKey'
import { FiltersProfessional, PaginatedProfissionalResponse } from '@/types/professional'
import { listPaginatedProfessionalAction } from '@/actions/professional'

export function useInfiniteProfessionals(
  initialFilters: Omit<FiltersProfessional, 'page'>,
  shouldFetch: boolean,
) {
  return useInfiniteQuery<PaginatedProfissionalResponse, Error>({
    queryKey: [queriesKey.professionals, initialFilters],
    queryFn: async ({ pageParam }) => {
      const filters: FiltersProfessional = {
        ...initialFilters,
        page: pageParam as number, // garante que seja number
      }

      const result = await listPaginatedProfessionalAction(filters)

      if (!result.success) {
        toast.error('Erro ao buscar profissionais, tente novamente mais tarde')
        throw result.error
      }

      return result.data
    },
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined
    },
    enabled: shouldFetch,
    retry: false,
    staleTime: 5 * 60 * 1000,
    initialPageParam: 1,
  })
}
