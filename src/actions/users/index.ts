'use server'

import { createUserService } from '@/services/users/createUserService'
import { CreateUserRequest } from '@/types/users'

export async function createUserAction(data: CreateUserRequest) {
  return createUserService(data)
}
