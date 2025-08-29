'use client'

import { useQuery } from '@tanstack/react-query'

import { queriesKey } from '@/utils/queriesKey'
import { ListAllGeneralAvailabilitiesAction } from '@/actions/generalAvailability'

export function useListAllGeneralAvailabilities() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queriesKey.generalAvailabilities],
    queryFn: async () => {
      const result = await ListAllGeneralAvailabilitiesAction()

      if (!result.success) return []

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24,
    retry: 2,
  })

  return {
    generalAvailabilities: data ?? [],
    isLoading,
    isError,
  }
}
