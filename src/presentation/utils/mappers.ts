import { Profissional } from '@/core/types/professional'
import { calculateAge } from '@/core/utils/calculateAge'

export function mapperProfessional(professional: Profissional) {
  return {
    id: professional.id,
    fullName: professional.fullName,
    desiredPosition: professional.desiredPosition.label,
    age: calculateAge(professional.birthDate),
    location: `${professional.location.city.name}, ${professional.location.district.name}`,
    photo:
      (professional.profileImage ?? professional.gender.name === 'FEMALE')
        ? '/default-woman.png'
        : '/default-man.jpeg',
    isAvailable: professional.isAvailable,
  }
}
