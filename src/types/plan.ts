export type Plan = {
  id: string
  name: string
  description: string
  employees: number
  price: number
  isPopular: boolean
  isActive: boolean
  createdAt: string
  updatedAt: string
  details: string[]
}

export type PlansListResponse = Plan[]
