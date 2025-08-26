import Link from 'next/link'
import { LogIn, UserPlus } from 'lucide-react'

import { Logo } from './logo'
import { UserDropdown } from './userDropdown'

import { cn } from '@/presentation/utils'
import { buttonVariants } from '@/presentation/components/ui/button'
import { ThemeToggle } from '@/presentation/components/toggleTheme'

export function Navbar({ isAuthenticated }: { isAuthenticated: boolean }) {
  return (
    <header
      className={cn(
        'sticky top-0 w-full z-50  bg-background/95 backdrop-blur-xs border-b shadow-xs',
      )}
    >
      <div className="max-w-[120rem] w-full mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            aria-label="Ir para a página principal"
            className="flex items-center gap-2"
            href="/"
          >
            <Logo />
            <span className="sr-only">D-Express</span>
          </Link>
          <>
            {isAuthenticated ? (
              <UserDropdown />
            ) : (
              <div className="flex items-center gap-2 ">
                <ThemeToggle />
                <Link
                  className={cn('justify-start gap-2', buttonVariants({ variant: 'ghost' }))}
                  href="/login"
                >
                  <LogIn className="w-4 h-4" />
                  <span className="sr-only sm:not-sr-only">Login</span>
                </Link>
                <Link className={cn('justify-start gap-2', buttonVariants())} href="/register">
                  <UserPlus className="w-4 h-4" />
                  <span className="sr-only sm:not-sr-only"> Cadastrar</span>
                </Link>
              </div>
            )}
          </>
        </div>
      </div>
    </header>
  )
}
