// src/application/useCases/CreateUser/createRegisterUseCase.ts
import { UseCaseResponse } from '@/core/types/useCaseResponse'
import { handleApiError } from '@/application/utils/handleApiError'
import { CreateUserRequest, CreateUserResponse } from '@/core/types/users'
import { CreateUserService } from '@/core/interfaces/users'

export class CreateUserUseCase {
  constructor(private readonly service: CreateUserService) {}

  async execute(data: CreateUserRequest): Promise<UseCaseResponse<CreateUserResponse>> {
    try {
      const result = await this.service.create(data)

      return { success: true, data: result }
    } catch (err) {
      return { success: false, error: handleApiError(err) }
    }
  }
}
