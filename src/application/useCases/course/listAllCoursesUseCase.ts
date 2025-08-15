import { UseCaseResponse } from '@/core/types/useCaseResponse'
import { handleApiError } from '@/application/utils/handleApiError'
import { CourseListResponse } from '@/core/types/course'
import { ListAllCoursesService } from '@/core/interfaces/course'

export class ListAllCoursesUseCase {
  constructor(private readonly service: ListAllCoursesService) {}

  async execute(): Promise<UseCaseResponse<CourseListResponse>> {
    try {
      const courses = await this.service.list()

      return {
        data: courses,
        success: true,
      }
    } catch (err) {
      return {
        success: false,
        error: handleApiError(err),
      }
    }
  }
}
