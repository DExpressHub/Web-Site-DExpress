import { CreateUserRequest, CreateUserResponse } from '../types/users'

export interface CreateUserService {
  create(data: CreateUserRequest): Promise<CreateUserResponse>
}
