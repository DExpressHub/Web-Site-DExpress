import { UseCaseResponse } from '@/core/types/useCaseResponse'
import { handleApiError } from '@/application/utils/handleApiError'
import { LoginRequest, LoginResponse } from '@/core/types/auth'
import { LoginService } from '@/core/interfaces/auth'

export class LoginUseCase {
  constructor(private readonly service: LoginService) {}

  async execute(data: LoginRequest): Promise<UseCaseResponse<LoginResponse>> {
    try {
      const result = await this.service.login(data)

      return { success: true, data: result }
    } catch (err) {
      return { success: false, error: handleApiError(err) }
    }
  }
}
