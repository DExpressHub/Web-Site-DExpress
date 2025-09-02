import { Calendar, Mail, PhoneCall } from 'lucide-react'

import { Card } from '@/components/ui/card'

interface ProfessionalActionsProps {
  professional: {
    id: string
    fullName: string
    phoneNumber: string
    email: string
    isAvailable: boolean
    expectedAvailability: string
  }
}

export function ProfessionalContacts({ professional }: ProfessionalActionsProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-AO')
  }

  const isCurrentlyAvailable = professional.isAvailable

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="font-semibold text-foreground mb-4">Contato</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <PhoneCall className="text-muted-foreground" size={16} />
            <span className="text-sm text-foreground">{professional.phoneNumber}</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-muted-foreground" size={16} />
            <span className="text-sm text-foreground">{professional.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="text-muted-foreground" size={16} />
            <span className="text-sm text-muted-foreground">
              {isCurrentlyAvailable
                ? 'Disponível agora'
                : `Disponível a partir de ${formatDate(professional.expectedAvailability)}`}
            </span>
          </div>
        </div>
      </Card>
    </div>
  )
}
