export type CreateUserRequest = {
  firstName: string
  lastName: string
  email: string
  type: 'INDIVIDUAL' | 'COOPERATE'
}

export type CreateUserResponse = {
  message: string
}
