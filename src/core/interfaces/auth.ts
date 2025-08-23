import { LoginRequest, LoginResponse } from '../types/auth'

export interface LoginService {
  login(data: LoginRequest): Promise<LoginResponse>
}
