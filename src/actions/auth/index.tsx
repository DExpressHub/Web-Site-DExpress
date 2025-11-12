'use server'

import { loginServices } from '@/services/auth/login'
import { LoginRequest } from '@/types/auth'
import { logoutServices } from '@/services/auth/logout'
import { forgotPasswordService } from '@/services/auth/forgotPasswordService'
import { ForgotPasswordRequest } from '@/types/auth'
import { resetPasswordService } from '@/services/auth/resetPasswordService'
import { ResetPasswordRequest } from '@/services/auth/resetPasswordService'
export async function loginAction(data: LoginRequest) {
  return loginServices(data)
}
export async function logoutAction() {
  return logoutServices()
}

export async function forgotPasswordAction(data: ForgotPasswordRequest) {
  return forgotPasswordService(data)
}

export async function resetPasswordAction(data: ResetPasswordRequest) {
  return resetPasswordService(data)
}
