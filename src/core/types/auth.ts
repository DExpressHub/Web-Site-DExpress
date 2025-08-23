export type LoginRequest = {
  email: string
  password: string
}

export type LoginResponse = {
  user: AuthUser
}

export type AuthUserInner = {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  isActive: boolean
  type: 'INDIVIDUAL' | 'COMPANY'
  avatar: string
  createdAt: string // ISO date string
  updatedAt: string // ISO date string
  clientProfile: any[] // ou tipar melhor, se souber a estrutura de clientProfile
}

export type AuthUser = {
  id: string
  email: string
  type: 'INDIVIDUAL' | 'COMPANY'
  user: AuthUserInner
}

export type AuthResponse = {
  user: AuthUser
}
