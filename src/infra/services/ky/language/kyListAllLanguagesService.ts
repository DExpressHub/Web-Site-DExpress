import { api } from '../api'

import { ListAllLanguagesService } from '@/core/interfaces/language'
import { LanguageListResponse } from '@/core/types/language'

export class KyListAllLanguagesService implements ListAllLanguagesService {
  async list(): Promise<LanguageListResponse> {
    const response = await api('languages/list')

    return (await response.json()) as LanguageListResponse
  }
}
