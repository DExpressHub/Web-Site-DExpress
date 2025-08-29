'use client'

import { useQuery } from '@tanstack/react-query'

import { queriesKey } from '@/utils/queriesKey'
import { listAllCoursesAction } from '@/actions/course'

export function useListAllCourses() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queriesKey.courses],
    queryFn: async () => {
      const result = await listAllCoursesAction()

      if (!result.success) return []

      return result.data
    },
    staleTime: 1000 * 60 * 60 * 24,
    retry: 2,
  })

  return {
    courses: data ?? [],
    isLoading,
    isError,
  }
}
