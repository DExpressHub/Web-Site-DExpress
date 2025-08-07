type Profissional = {
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
    city: {
      id: string
      name: string
      createdAt: string
      updatedAt: string
    }
    district: {
      id: string
      name: string
      cityId: string
      createdAt: string
      updatedAt: string
    }
  }
}
