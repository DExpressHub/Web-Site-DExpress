import { Logo } from '../logo'

import { MenuItem } from './menuItem'
import { DesktopActions } from './actions'
import { MobileMenu } from './mobileMenu'
import { Header } from './header'

import { UserDropdown } from '@/components/userDropdown'
export function Navbar({ isAuthenticated }: { isAuthenticated: boolean }) {
  return (
    <Header>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <MenuItem className="hidden xl:flex flex-1 justify-center items-center space-x-8" />
          <div className="flex items-center gap-x-4">
            {isAuthenticated ? (
              <UserDropdown />
            ) : (
              <DesktopActions className="hidden xl:flex items-center gap-x-4" />
            )}
            <MobileMenu className=" xl:hidden" isAuthenticated={isAuthenticated} />
          </div>
        </div>
      </div>
    </Header>
  )
}
