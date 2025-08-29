'use client'
import { useQuery } from '@tanstack/react-query'

import { queriesKey } from '@/utils/queriesKey'
import { listAllSectorsAction } from '@/actions/sector'

export function useListAllSectores() {
  const { data, error, isError } = useQuery({
    queryKey: [queriesKey.sectores],
    queryFn: async () => {
      const result = await listAllSectorsAction()

      if (!result.success) {
        throw result.error
      }

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24,
    retry: 2,
  })

  return {
    sectores: data ?? [],
    error,
    isError,
  }
}
