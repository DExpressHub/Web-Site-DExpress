import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { CourseListResponse } from '@/types/course'
import { ServiceResponse } from '@/types/serviceResponse'

export async function listAllCoursesService(): Promise<ServiceResponse<CourseListResponse>> {
  try {
    const response = await api.get('courses/list')
    const data = await response.json<CourseListResponse>()

    return {
      success: true,
      data,
    }
  } catch (error) {
    return {
      success: false,
      error: handleApiError(error),
    }
  }
}
