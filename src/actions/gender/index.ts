'use server'
import { listAllGenderService } from '@/services/gender/listAllGenderService'

export async function listAllGenderAction() {
  return listAllGenderService()
}
