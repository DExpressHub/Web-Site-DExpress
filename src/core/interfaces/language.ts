import { LanguageListResponse } from '../types/language'

export interface ListAllLanguagesService {
  list(): Promise<LanguageListResponse>
}
