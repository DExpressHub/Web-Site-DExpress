export type LoginRequest = {
  email: string
  password: string
}

export type LoginResponse = {
  user: {
    id: string
    email: string
    type: string
    user: {
      id: string
      firstName: string
      lastName: string
      email: string
      password: string
      isActive: boolean
      type: string
      avatar: string
      createdAt: string
      updatedAt: string
      clientProfile: any[]
    }
  }
  accessToken: string
  refreshToken: string
}
