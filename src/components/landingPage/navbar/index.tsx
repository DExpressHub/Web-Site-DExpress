import { MenuItem } from './menuItem'
import { DesktopActions } from './actions'
import { Logo } from './logo'
import { MobileMenu } from './mobileMenu'
import { Header } from './header'

export function Navbar() {
  return (
    <Header>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <MenuItem className="hidden xl:flex items-center space-x-8" />
          <DesktopActions className="hidden xl:flex items-center space-x-4" />
          <MobileMenu className=" xl:hidden" />
        </div>
      </div>
    </Header>
  )
}
