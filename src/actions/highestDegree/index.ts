'use server'

import { listAllHighestDegreesService } from '@/services/highestDegree/listAllHighestDegreesService'

export async function listAllHighestDegreesAction() {
  return listAllHighestDegreesService()
}
