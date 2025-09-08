import { ServiceFrequency } from '@/constants'

type BaseRequest = {
  description: string

  requesterEmail: string
  requesterPhoneNumber: string
  serviceFrequency: string
}

// Campos quando o solicitante é pessoa individual
type IndividualRequest = BaseRequest & {
  requesterType: 'INDIVIDUAL'
  individualRequesterName: string
  individualIdentityNumber: string
  individualAddress: string
  individualUserId: string
  professionalId: string
}

// Campos quando o solicitante é empresa
type CorporateRequest = BaseRequest & {
  requesterType: 'CORPORATE'
  companyRequesterName: string
  companyNif: string
  companyAddress: string
  companyDistrictId: string
  companySectorId: string
  planId: string
}

export type CreateServiceRequestParams = IndividualRequest | CorporateRequest

export type ServiceRequestCorporate = {
  id: string
  requesterType: 'CORPORATE'
  requesterEmail: string
  requesterPhoneNumber: string
  individualRequesterName: string
  individualIdentityNumber: string
  individualAddress: string
  individualUserId: string
  companyRequesterName: null
  companyNif: string
  companyAddress: string
  companyDistrictId: string
  companySectorId: string
  description: string
  serviceFrequency: ServiceFrequency
  createdAt: string
  status: string
  planId: string
  professionalId: string
}[]

export type ServiceRequestIndividual = {
  id: string
  requesterType: 'INDIVIDUAL'
  requesterEmail: string
  requesterPhoneNumber: string
  individualRequesterName: string
  individualIdentityNumber: string
  individualAddress: string
  individualUserId: string
  companyRequesterName: null
  description: string
  serviceFrequency: ServiceFrequency
  createdAt: string
  status: string
  professionalId: string
}

export type GetUserServiceRequest = {
  data: {
    id: string
    status: string
    serviceFrequency: string
    description: string
    createdAt: string
    professional: Professional
  }[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface Root {
  data: Daum[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface Daum {
  id: string
  status: string
  serviceFrequency: string
  description: string
  createdAt: string
  professional: Professional
}

export interface Professional {
  id: string
  fullName: string
  email: string
  phoneNumber: string
  identityNumber: string
  isAvailable: boolean
  description: string
  expectedAvailability: string
  hasCriminalRecord: boolean
  hasMedicalCertificate: boolean
  hasTrainingCertificate: boolean
  location: Location
  profileImage: string
  gender: Gender
  birthDate: string
  hasChildren: boolean
  knownDiseases: string
  createdAt: string
  experienceLevel: ExperienceLevel
  maritalStatus: MaritalStatus
  highestDegree: HighestDegree
}

export interface Location {
  id: string
  street: string
  city: City
  district: District
}

export interface City {
  name: string
}

export interface District {
  name: string
}

export interface Gender {
  id: string
  name: string
  label: string
  createdAt: string
  updatedAt: string
}

export interface ExperienceLevel {
  id: string
  name: string
  label: string
  createdAt: string
  updatedAt: string
}

export interface MaritalStatus {
  id: string
  name: string
  label: string
  createdAt: string
  updatedAt: string
}

export interface HighestDegree {
  id: string
  name: string
  label: string
  level: number
  createdAt: string
  updatedAt: string
}
