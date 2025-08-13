import { api } from '../api'

import { ListAllCoursesService } from '@/core/interfaces/course'
import { CourseListResponse } from '@/core/types/course'

export class KyListAllCoursesService implements ListAllCoursesService {
  async list(): Promise<CourseListResponse> {
    const response = await api('courses/list')

    return (await response.json()) as CourseListResponse
  }
}
