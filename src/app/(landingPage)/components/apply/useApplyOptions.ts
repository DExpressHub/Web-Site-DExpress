'use client'
import React from 'react'

import { useWithOptions } from '@/hooks/useWithOptions'
import { useListAllGender } from '@/hooks/gender/useListAllGender'
import { useListAllMaritalStatuses } from '@/hooks/maritalStatuses/useListAllMaritalStatuses'
import { useListAllCities } from '@/hooks/city/useListAllCities'
import { useListAllDesiredPosition } from '@/hooks/desiredPosition/useListAllDesiredPosition'
import { useListAllGeneralAvailabilities } from '@/hooks/generalAvailability/useListAllGeneralAvailabilities'
import { useListAllHighestDegree } from '@/hooks/highestDegree/useListAllHighestDegree'
import { useListAllCourses } from '@/hooks/courses/useListAllCourses'
import { useListAllLanguages } from '@/hooks/languages/useListAllLanguages'
import { useListAllSkills } from '@/hooks/Skills/useListAllSkills'
import { useListAllExperienceLevels } from '@/hooks/experienceLevels/useListAllExperienceLevels'

export function useApplyOptions() {
  const withAllOption = useWithOptions()
  const { genders } = useListAllGender()
  const { maritalStatuses } = useListAllMaritalStatuses()
  const { cities } = useListAllCities()
  const { desiredPosition } = useListAllDesiredPosition()
  const { generalAvailabilities } = useListAllGeneralAvailabilities()
  const { highestDegrees } = useListAllHighestDegree()
  const { courses } = useListAllCourses()
  const { languages } = useListAllLanguages()
  const { skills } = useListAllSkills()
  const { experienceLevels } = useListAllExperienceLevels()
  const genderOptions = React.useMemo(
    () => withAllOption(genders, (g) => g.label, false),
    [genders, withAllOption],
  )
  const martialStatusOptions = React.useMemo(
    () => withAllOption(maritalStatuses, (g) => g.label, false),
    [maritalStatuses, withAllOption],
  )

  const citiesOptions = React.useMemo(
    () => withAllOption(cities, (c) => c.name, false),
    [cities, withAllOption],
  )
  const desiredPositions = React.useMemo(
    () => withAllOption(desiredPosition, (s) => s.label, false),
    [desiredPosition, withAllOption],
  )
  const generalAvailabilitiesOptions = React.useMemo(
    () => withAllOption(generalAvailabilities, (g) => g.label, false),
    [generalAvailabilities, withAllOption],
  )
  const highestDegreesOptions = React.useMemo(
    () => withAllOption(highestDegrees, (g) => g.label, false),
    [highestDegrees, withAllOption],
  )
  const coursesOptions = React.useMemo(
    () => withAllOption(courses, (g) => g.label, false),
    [courses, withAllOption],
  )
  const languageOptions = React.useMemo(
    () => withAllOption(languages, (g) => g.label, false),
    [languages, withAllOption],
  )
  const skillsOptions = React.useMemo(
    () => withAllOption(skills, (g) => g.label, false),
    [skills, withAllOption],
  )
  const experienceLevelsOptions = React.useMemo(
    () => withAllOption(experienceLevels, (g) => g.label, false),
    [experienceLevels, withAllOption],
  )

  return {
    genderOptions,
    martialStatusOptions,
    citiesOptions,
    desiredPositions,
    generalAvailabilitiesOptions,
    highestDegreesOptions,
    coursesOptions,
    languageOptions,
    skillsOptions,
    experienceLevelsOptions,
  }
}
