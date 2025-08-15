import { z } from 'zod'

import { defaultValuesPersonal, personalSchema } from './personalSchema'
import { contactSchema, defaultValuesContact } from './contactSchema'
import { defaultValuesEducation, educationSchema } from './educationSchema'
import {
  defaultValuesLanguagesAndSkills,
  languagesAndSkillsSchema,
} from './languagesAndSkillsSchema'
import { defaultValuesProfessional, professionalSchema } from './professionalSchema'
import { defaultValuesLocation, locationSchema } from './locationSchema'

export const formSchema = personalSchema
  .merge(contactSchema)
  .merge(professionalSchema)
  .merge(educationSchema)
  .merge(languagesAndSkillsSchema).merge(locationSchema)

export type FormData = z.infer<typeof formSchema>

export const defaultValues: FormData = {
  ...defaultValuesPersonal,
  ...defaultValuesContact,
  ...defaultValuesProfessional,
  ...defaultValuesEducation,
  ...defaultValuesLanguagesAndSkills,
  ...defaultValuesLocation,
}
