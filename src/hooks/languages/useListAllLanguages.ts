'use client'

import { useQuery } from '@tanstack/react-query'

import { queriesKey } from '@/utils/queriesKey'
import { listAllLanguagesAction } from '@/actions/language'

export function useListAllLanguages() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queriesKey.languages],
    queryFn: async () => {
      const result = await listAllLanguagesAction()

      if (!result.success) return []

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24,
    retry: 2,
  })

  return {
    languages: data ?? [],
    isLoading,
    isError,
  }
}
