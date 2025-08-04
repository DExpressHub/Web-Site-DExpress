export type FeatureDTO = {
  id: string
  name: string
  description?: string
  quantity?: number
}

export type PropertyDTO = {
  id: string
  category: string
  imageUrl: string
  price: number
  location: string
  rating: number
  area: number
  type: 'rent' | 'sale'
  createdAt: Date
  features: FeatureDTO[]
}
