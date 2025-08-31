import { Logo } from '../logo'

import { MenuItem } from './menuItem'
import { DesktopActions } from './actions'
import { MobileMenu } from './mobileMenu'
import { Header } from './header'

import { UserDropdown } from '@/components/userDropdown'
import { ThemeToggle } from '@/components/toggleTheme'
export function Navbar({ isAuthenticated }: { isAuthenticated: boolean }) {
  return (
    <Header>
      <div className="max-w-[120rem] w-full mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <div className="flex items-center gap-x-8">
            <MenuItem className="hidden xl:flex flex-1 justify-center items-center gap-8" />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              {isAuthenticated ? (
                <UserDropdown />
              ) : (
                <DesktopActions className="hidden xl:flex items-center gap-x-2" />
              )}

              <MobileMenu className=" xl:hidden" isAuthenticated={isAuthenticated} />
            </div>
          </div>
        </div>
      </div>
    </Header>
  )
}
