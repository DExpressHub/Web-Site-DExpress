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
