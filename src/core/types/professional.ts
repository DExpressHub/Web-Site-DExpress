import { City } from './city'
import { District } from './district'

export type Profissional = {
  id: string
  fullName: string
  email: string
  phoneNumber: string
  identityNumber: string
  isAvailable: boolean
  availabilityType: 'FULL_TIME' | 'PART_TIME'
  experienceLevel: 'LESS_THAN_1' | 'BETWEEN_1_AND_3' | 'MORE_THAN_3'
  jobApplicationId: string
  description: string
  expectedAvailability: string
  hasCriminalRecord: boolean
  hasMedicalCertificate: boolean
  hasTrainingCertificate: boolean
  locationId: string
  profileImage: string | null
  gender: 'MALE' | 'FEMALE'
  birthDate: string
  maritalStatus: string
  hasChildren: boolean
  knownDiseases: string
  desiredPosition: string
  expectedSalary: number
  highestDegree: string
  courses: string[]
  languages: string[]
  skillsAndQualities: string[]
  createdAt: string
  updatedAt: string
  specialties: string[]
  availability: string[]
  location: {
    id: string
    cityId: string
    districtId: string
    street: string
    createdAt: string
    updatedAt: string
    city: City
    district: District
  }
}

export type FiltersProfessional = {
  cityId?: string
  districtId?: string
  availabilityTypeId?: string
  specialtyId?: string
  search?: string
  page?: number
  limit?: number
  desiredPositionId?: string
}

export type PaginatedProfissionalResponse = {
  data: Profissional[]
  total: number
  page: number
  limit: number
  totalPages: number
}
