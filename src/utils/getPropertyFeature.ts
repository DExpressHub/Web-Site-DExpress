import { FeatureDTO } from '../types/property'

export const getPropertyFeature = (features: FeatureDTO[], id: string) => {
  return features.find((feature) => feature.id === id)
}
