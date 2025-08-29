'use server'

import { listAllDistrictsByCityIdService } from '@/services/districts/listAllDistrictsByCityIdService'

export async function listAllDistrictsByCityIdAction(cityId: string) {
  return listAllDistrictsByCityIdService(cityId)
}
