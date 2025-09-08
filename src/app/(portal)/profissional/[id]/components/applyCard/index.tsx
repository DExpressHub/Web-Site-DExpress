'use client'
import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/utils/cn'
import { links } from '@/config/links'
import { buttonVariants } from '@/components/ui/button'
import { setRedirectedUrl } from '@/lib/redirectUrl'

type ApplyCardProps = {
  isAuthenticated: boolean
  className?: string
  professional: {
    isAvailable: boolean
    id: string
  }
}

export function ApplyCard({ professional, className, isAuthenticated }: ApplyCardProps) {
  const { push } = useRouter()
  const handleNavigate = useCallback(async () => {
    if (!isAuthenticated) {
      setRedirectedUrl(`/${links.contratar}/${professional.id}`)

      push(`/${links.login}`)

      return
    }
    push(`/${links.contratar}/${professional.id}`)
  }, [isAuthenticated])

  return (
    <Card className={cn('p-6', className)}>
      <h3 className="font-semibold text-foreground mb-4">Contratar Profissional</h3>
      <div className="space-y-4">
        <Button
          className={cn(buttonVariants({ className: 'w-full cursor-pointer' }))}
          onClick={handleNavigate}
        >
          {professional.isAvailable ? 'Contratar Agora' : 'Indisponível'}
        </Button>
      </div>
    </Card>
  )
}
