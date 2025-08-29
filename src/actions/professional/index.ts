'use server'

import { listPaginatedProfessionalService } from '@/services/professionals/listPaginatedProfessionalsService'
import { FiltersProfessional } from '@/types/professional'

export async function listPaginatedProfessionalAction(filters?: FiltersProfessional) {
  return listPaginatedProfessionalService(filters)
}
