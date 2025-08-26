import { LogoutService } from '@/core/interfaces/auth'
import { api } from '@/infra/services/ky/api'

export class KyLogoutService implements LogoutService {
  async logout(): Promise<void> {
    await api.post('auth/logout')
  }
}
