'use client'

import { useQuery } from '@tanstack/react-query'

import { coursesUseCase } from '@/presentation/factories/useCase/courses'
import { queriesKey } from '@/presentation/queriesKey'

export function useListAllCourses() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queriesKey.courses],
    queryFn: async () => {
      const result = await coursesUseCase.listAll.execute()

      if (!result.success) return []

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    retry: 2,
  })

  return {
    courses: data ?? [],
    isLoading,
    isError,
  }
}
