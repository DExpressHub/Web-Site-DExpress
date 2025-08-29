'use server'

import { loginServices } from '@/services/auth/login'
import { LoginRequest } from '@/types/auth'
import { logoutServices } from '@/services/auth/logout'

export async function loginAction(data: LoginRequest) {
  return loginServices(data)
}
export async function logoutAction() {
  return logoutServices()
}
