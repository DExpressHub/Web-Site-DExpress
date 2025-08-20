import { CourseListResponse } from '../types/course'

export interface ListAllSectorService {
  list(): Promise<CourseListResponse>
}
