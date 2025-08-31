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
