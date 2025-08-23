import { CreateUserService } from '@/core/interfaces/users'
import { CreateUserRequest, CreateUserResponse } from '@/core/types/users'
import { api } from '@/infra/services/ky/api'

export class KyCreateUserService implements CreateUserService {
  async create(data: CreateUserRequest): Promise<CreateUserResponse> {
    const response = await api.post('users', { json: data })

    return await response.json<CreateUserResponse>()
  }
}
