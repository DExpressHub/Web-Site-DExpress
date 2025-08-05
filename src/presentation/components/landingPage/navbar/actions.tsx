import { LogIn, UserPlus } from 'lucide-react'
import Link from 'next/link'

import { ThemeToggle } from '@/presentation/components/toggleTheme'
import { buttonVariants } from '@/presentation/components/ui/button'
import { cn } from '@/presentation/utils'

export function DesktopActions({ className }: { className?: string }) {
  return (
    <div className={cn('hidden xl:flex items-center space-x-4', className)}>
      <ThemeToggle />
      <Link
        className={cn('text-foreground', buttonVariants({ variant: 'ghost', size: 'sm' }))}
        href="/login"
      >
        <LogIn className="w-4 h-4 mr-2" />
        Login
      </Link>
      <Link className={cn(buttonVariants({ size: 'sm' }))} href="/register">
        <UserPlus className="w-4 h-4 mr-2" />
        Cadastrar
      </Link>
    </div>
  )
}
export function MobileActions() {
  return (
    <div className="flex flex-col space-y-3 pt-4 border-t">
      <Link className={cn('justify-start', buttonVariants({ variant: 'ghost' }))} href="/login">
        <LogIn className="w-4 h-4 mr-2" />
        Login
      </Link>
      <Link className={cn('justify-start', buttonVariants())} href="/register">
        <UserPlus className="w-4 h-4 mr-2" />
        Cadastrar
      </Link>
    </div>
  )
}
