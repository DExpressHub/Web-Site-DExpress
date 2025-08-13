import { ListAllCoursesUseCase } from '@/application/useCases/course/listAllCoursesUseCase'
import { KyListAllCoursesService } from '@/infra/services/ky/course/kyListAllCoursesService'

function listAllCoursesCaseFactory() {
  const service = new KyListAllCoursesService()
  const useCase = new ListAllCoursesUseCase(service)

  return useCase
}

export const coursesUseCase = {
  listAll: listAllCoursesCaseFactory(),
}
