import { Suspense } from 'react'

import { Logo } from '../logo'

import { MenuItem } from './menuItem'
import { Header } from './header'
import { HeaderUserControls } from './headerUserControls'

import { Skeleton } from '@/components/ui/skeleton'
import { ThemeToggle } from '@/components/toggleTheme'

export function Navbar() {
  return (
    <Header>
      <div className="max-w-[120rem] w-full mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="flex items-center gap-x-8">
            <MenuItem className="hidden xl:flex flex-1 justify-center items-center gap-8" />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Suspense fallback={<Skeleton className="w-10 h-10" />}>
                <HeaderUserControls />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </Header>
  )
}
