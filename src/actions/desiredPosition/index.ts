'use server'

import { listAllDesiredPositionsService } from '@/services/desiredPosition/listAllDesiredPositionService'

export async function listAllDesiredPositionsAction() {
  return listAllDesiredPositionsService()
}
