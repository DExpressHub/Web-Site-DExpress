'use server'
import { listAllExperienceLevelsService } from '@/services/experienceLevel/listAllExperienceLevelsService'

export async function listAllExperienceLevelsAction() {
  return listAllExperienceLevelsService()
}
