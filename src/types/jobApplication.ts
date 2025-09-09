// src/core/types/jobApplication.ts
import { Location } from './location'
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
  desiredPositionId: string
  highestDegreeId: string
  hasChildren: boolean
  knownDiseases: boolean
  availabilityDate: string
  ProfessionalExperience: ProfessionalExperience[]
  languages: string[]
  skills: string[]
  courses: string[]
  location: Location
}

export type JobApplicationResponse = {
  id: string
  message: string
}
