import Link from 'next/link'

import { Card } from '@/components/ui/card'
import { cn } from '@/utils/cn'
import { links } from '@/config/links'
import { buttonVariants } from '@/components/ui/button'
import { checkAuth } from '@/actions/checkAuth'

type ApplyCardProps = {
  className?: string
  professional: {
    isAvailable: boolean
    id: string
  }
}

export async function ApplyCard({ professional, className }: ApplyCardProps) {
  const { isAuthenticated } = await checkAuth()

  if (!isAuthenticated) {
    return null
  }

  return (
    <Card className={cn('p-6', className)}>
      <h3 className="font-semibold text-foreground mb-4">Contratar Profissional</h3>
      <div className="space-y-4">
        <Link
          className={cn(buttonVariants({ className: 'w-full cursor-pointer' }))}
          href={`/${links.contratar}/${professional.id}`}
        >
          {professional.isAvailable ? 'Contratar Agora' : 'Indisponível'}
        </Link>
      </div>
    </Card>
  )
}
