export type CreateUserRequest = {
  firstName: string
  lastName: string
  email: string
  type: 'INDIVIDUAL' | 'CORPORATE'
}

export type CreateUserResponse = {
  message: string
}

export type GetCurrentUserResponse = {
  id: string
  email: string
  firstName: string
  lastName: string
  type: 'INDIVIDUAL' | 'COOPERATE'
  avatar: string
  isActive: boolean
  createdAt: string
  updatedAt: string
  clientProfile: any[]
}
