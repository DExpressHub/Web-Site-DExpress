// src/presentation/factories/useCase/register.ts
import { CreateUserUseCase } from '@/application/useCases/users/createUserUseCase'
import { KyCreateUserService } from '@/infra/services/ky/users/kyCreateUserService'

function createUserUseCaseFactory() {
  const service = new KyCreateUserService()

  return new CreateUserUseCase(service)
}

export const usersUseCase = {
  create: createUserUseCaseFactory(),
}
