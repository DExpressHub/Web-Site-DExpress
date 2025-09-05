import { Profissional } from '@/types/professional'
import { calculateAge } from '@/utils/calculateAge'

export function mapperProfessional(professional: Profissional) {
  let photo = '/default-man.jpeg'

  if (professional.gender.name === 'FEMALE') {
    photo = '/default-woman.png'
  }

  if (professional.profileImage) {
    photo = professional.profileImage
  }

  return {
    id: professional.id,
    fullName: professional.fullName,
    desiredPosition: professional.desiredPosition.label,
    age: calculateAge(professional.birthDate),
    location: `${professional.location.city.name}, ${professional.location.district.name}`,
    photo,
    isAvailable: professional.isAvailable,
  }
}
