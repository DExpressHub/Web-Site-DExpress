import { Button } from '@/components/ui/button'
import { cn } from '@/utils/cn'

type ProfessionalStatsProps = {
  className?: string
  professional: {
    isAvailable: boolean
    id: string
  }
}

export function ApplyButton({ professional, className }: ProfessionalStatsProps) {
  return (
    <Button className={cn('w-full cursor-pointer', className)} disabled={!professional.isAvailable}>
      {professional.isAvailable ? 'Contratar Agora' : 'Indisponível'}
    </Button>
  )
}
