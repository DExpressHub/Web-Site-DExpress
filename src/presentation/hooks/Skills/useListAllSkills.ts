'use client'

import { useQuery } from '@tanstack/react-query'

import { skillsUseCase } from '@/presentation/factories/useCase/skills'
import { queriesKey } from '@/presentation/queriesKey'

export function useListAllSkills() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queriesKey.skills],
    queryFn: async () => {
      const result = await skillsUseCase.listAll.execute()

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
