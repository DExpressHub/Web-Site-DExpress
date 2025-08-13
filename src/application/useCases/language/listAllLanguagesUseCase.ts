import { UseCaseResponse } from '@/core/types/useCaseResponse'
import { handleApiError } from '@/application/utils/handleApiError'
import { LanguageListResponse } from '@/core/types/language'
import { ListAllLanguagesService } from '@/core/interfaces/language'

export class ListAllLanguagesUseCase {
  constructor(private readonly service: ListAllLanguagesService) {}

  async execute(): Promise<UseCaseResponse<LanguageListResponse>> {
    try {
      const languages = await this.service.list()

      return {
        data: languages,
        success: true,
      }
    } catch (err) {
      return {
        success: false,
        error: handleApiError(err),
      }
    }
  }
}
