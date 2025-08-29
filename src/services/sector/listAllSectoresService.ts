// app/services/listAllSectorsService.ts
import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { SectorResponse } from '@/types/sector'
import { ServiceResponse } from '@/types/serviceResponse'

export async function listAllSectorsService(): Promise<ServiceResponse<SectorResponse>> {
  try {
    const response = await api.get('sectors/list')
    const data = await response.json<SectorResponse>()

    return {
      success: true,
      data,
    }
  } catch (error) {
    return {
      success: false,
      error: handleApiError(error),
    }
  }
}
