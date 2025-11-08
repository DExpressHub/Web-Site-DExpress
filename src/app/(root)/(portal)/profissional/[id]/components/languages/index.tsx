import { Badge } from '@/components/ui/badge'
import { Language } from '@/types/language'

interface ProfessionalLanguagesProps {
  languages: { language: Language }[]
}

export function ProfessionalLanguages({
  languages,
}: ProfessionalLanguagesProps) {
  if (languages.length === 0) return null

  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-foreground mb-4">Idiomas</h3>
      <div className="flex flex-wrap gap-2">
        {languages.map((item, index) => (
          <Badge key={index} variant="secondary">
            {item.language.label}
          </Badge>
        ))}
      </div>
    </div>
  )
}
