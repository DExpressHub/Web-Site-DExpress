// src/core/types/jobApplication.ts
export type ProfessionalExperience = {
  localTrabalho: string
  cargo: string
  tempo: string
}

export type JobApplicationRequest = {
  fullName: string
  identityNumber: string
  phoneNumber: string
  optionalPhoneNumber?: string
  email: string
  birthDate: string
  genderId: string
  maritalStatusId: string
  experienceLevelId: string
  generalAvailabilityId: string
  desiredPositionId: string
  highestDegreeId: string
  hasChildren: boolean
  knownDiseases: string
  availabilityDate: string
  ProfessionalExperience: ProfessionalExperience[]
  languages: string[]
  skills: string[]
  courses: string[]
  location: {
    cityId: string
    districtId: string
    street: string
  }
}

export type JobApplicationResponse = {
  id: string
  message: string
}
