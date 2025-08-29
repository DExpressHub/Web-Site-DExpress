'use client'

import { useQuery } from '@tanstack/react-query'

import { queriesKey } from '@/utils/queriesKey'
import { listAllSkillsAction } from '@/actions/skill'

export function useListAllSkills() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queriesKey.skills],
    queryFn: async () => {
      const result = await listAllSkillsAction()

      if (!result.success) return []

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    retry: 2,
  })

  return {
    skills: data ?? [],
    isLoading,
    isError,
  }
}
