import { LogIn, UserPlus } from 'lucide-react'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/utils/cn'
import { links } from '@/config/links'

export function DesktopActions({ className }: { className?: string }) {
  return (
    <div className={cn('hidden xl:flex items-center gap-x-4', className)}>
      <Link
        className={cn('text-foreground', buttonVariants({ variant: 'ghost', size: 'sm' }))}
        href={`/${links.login}`}
      >
        <LogIn className="w-4 h-4 mr-2" />
        Login
      </Link>
      <Link className={cn(buttonVariants({ size: 'sm' }))} href={`/${links.cadastrar}`}>
        <UserPlus className="w-4 h-4 mr-2" />
        Cadastrar
      </Link>
    </div>
  )
}
export function MobileActions() {
  return (
    <div className="flex flex-col space-y-3 pt-4 border-t">
      <Link
        className={cn('justify-start', buttonVariants({ variant: 'ghost' }))}
        href={`/${links.login}`}
      >
        <LogIn className="w-4 h-4 mr-2" />
        Login
      </Link>
      <Link className={cn('justify-start', buttonVariants())} href={`/${links.cadastrar}`}>
        <UserPlus className="w-4 h-4 mr-2" />
        Cadastrar
      </Link>
    </div>
  )
}
