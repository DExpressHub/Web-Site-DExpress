import { handleApiError } from '@/application/utils/handleApiError'
import { LogoutService } from '@/core/interfaces/auth'
import { UseCaseResponse } from '@/core/types/useCaseResponse'

export class LogoutUseCase {
  constructor(private readonly service: LogoutService) {}

  async execute(): Promise<UseCaseResponse<void>> {
    try {
      const result = await this.service.logout()

      return { success: true, data: result }
    } catch (err) {
      return { success: false, error: handleApiError(err) }
    }
  }
}
