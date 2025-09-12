import { Personal } from './personal'
import { Contact } from './contact'
import { Professional } from './professional'
import { Education } from './education'
import { LanguagesAndSkills } from './languagesAndSkills'
import { Location } from './location'

export const steps = [
  {
    id: 'personal',
    component: <Personal />,
    fields: [
      'fullName',
      'identityNumber',
      'maritalStatusId',
      'hasChildren',
      'birthDate',
      'genderId',
      'knownDiseases',
    ] as const,
  },
  {
    id: 'contact',
    component: <Contact />,
    fields: ['email', 'phoneNumber', 'optionalPhoneNumber'] as const,
  },
  {
    id: 'professional',
    component: <Professional />,
    fields: [
      'desiredPositionId',
      'experienceLevelId',
      'availabilityDate',
      'ProfessionalExperience',
    ] as const,
  },
  {
    id: 'education',
    component: <Education />,
    fields: ['highestDegreeId', 'courses'] as const,
  },
  {
    id: 'languagesAndSkills',
    component: <LanguagesAndSkills />,
    fields: ['languages', 'skills'] as const,
  },
  {
    id: 'location',
    component: <Location />,
    fields: ['street', 'districtId', 'cityId'] as const,
  },
]
