'use server'
import { listAllCoursesService } from '@/services/course/listAllCoursesService'

export async function listAllCoursesAction() {
  return listAllCoursesService()
}
