import 'server-only'

import { api } from '@/lib/api'
import { handleApiError } from '@/utils/handleApiError'
import { LanguageListResponse } from '@/types/language'
import { ServiceResponse } from '@/types/serviceResponse'

export async function listAllLanguagesService(): Promise<ServiceResponse<LanguageListResponse>> {
  try {
    const response = await api.get('languages/list')
    const data = await response.json<LanguageListResponse>()

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
