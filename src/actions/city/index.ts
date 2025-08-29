'use server'

import { listAllCitiesService } from '@/services/city/listAllCitiesService'

export async function listAllCitiesAction() {
  return listAllCitiesService()
}
