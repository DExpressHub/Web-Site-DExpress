import { LoginUseCase } from '@/application/useCases/auth/loginUseCase'
import { KyLoginService } from '@/infra/services/ky/auth/kyLoginService'

function loginUseCaseFactory() {
  const service = new KyLoginService()

  return new LoginUseCase(service)
}

export const authUseCase = {
  login: loginUseCaseFactory(),
}
