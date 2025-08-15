import { CourseListResponse } from '../types/course'

export interface ListAllCoursesService {
  list(): Promise<CourseListResponse>
}
