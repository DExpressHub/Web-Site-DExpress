'use server'

import { listAllMaritalStatusesService } from '@/services/maritalStatuses/listAllMaritalStatusesService'

export async function listAllMaritalStatusesAction() {
  return listAllMaritalStatusesService()
}
