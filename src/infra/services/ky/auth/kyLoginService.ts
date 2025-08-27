import { LoginService } from '@/core/interfaces/auth'
import { LoginRequest, LoginResponse } from '@/core/types/auth'
import { api } from '@/infra/services/ky/api'

export class KyLoginService implements LoginService {
  async login(data: LoginRequest): Promise<LoginResponse> {
    const response = await api.post('auth/login', { json: data })

    return await response.json<LoginResponse>()
  }
}
