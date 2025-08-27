import { LoginUseCase } from '@/application/useCases/auth/loginUseCase'
import { LogoutUseCase } from '@/application/useCases/auth/logoutUseCase'
import { KyLoginService } from '@/infra/services/ky/auth/kyLoginService'
import { KyLogoutService } from '@/infra/services/ky/auth/kyLogoutService'

function loginUseCaseFactory() {
  const service = new KyLoginService()

  return new LoginUseCase(service)
}

function logoutUseCaseFactory() {
  const service = new KyLogoutService()

  return new LogoutUseCase(service)
}

export const authUseCase = {
  login: loginUseCaseFactory(),
  logout: logoutUseCaseFactory(),
}
