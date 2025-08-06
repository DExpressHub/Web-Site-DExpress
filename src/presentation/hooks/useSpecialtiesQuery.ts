'use client'
import { useQuery } from '@tanstack/react-query'

import { getSpecialtiesUseCaseFactory } from '@/presentation/factories/getSpecialties'
import { queriesKey } from '@/presentation/queriesKey'

export function useSpecialtiesQuery() {
  const { data } = useQuery({
    queryKey: [queriesKey.specialties],
    queryFn: async () => {
      const result = await getSpecialtiesUseCaseFactory().execute()

      if (!result.success) {
        return []
      }

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24,
    retry: false,
  })

  return {
    specialties: data ?? [],
  }
}
