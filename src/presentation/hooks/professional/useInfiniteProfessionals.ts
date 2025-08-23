'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { toast } from 'sonner'

import { professionalUseCase } from '@/presentation/factories/useCase/professionals'
import { queriesKey } from '@/presentation/queriesKey'
import { FiltersProfessional, PaginatedProfissionalResponse } from '@/core/types/professional'

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

      const result = await professionalUseCase.listAll.execute(filters)

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
