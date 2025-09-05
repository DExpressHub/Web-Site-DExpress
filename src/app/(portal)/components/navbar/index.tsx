import Link from 'next/link'
import { Suspense } from 'react'

import { Logo } from './logo'
import { AuthActions } from './authActions'

import { cn } from '@/utils/cn'
import { Skeleton } from '@/components/ui/skeleton'
import { ThemeToggle } from '@/components/toggleTheme'

export async function Navbar() {
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
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Suspense fallback={<Skeleton className="w-10 h-10" />}>
              <AuthActions />
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  )
}
