import { DesktopActions } from './actions'
import { MobileMenu } from './mobileMenu'

import { UserDropdown } from '@/components/userDropdown'
import { GetCurrentUserResponse } from '@/types/users'
import { verifyUser } from '@/lib/verifyUser'

export async function HeaderUserControls() {
  let user: GetCurrentUserResponse | undefined = undefined
  let isAuthenticated = false
  const result = await verifyUser()

  if (result.success) {
    isAuthenticated = true
    user = result.data
  }

  return (
    <div className="flex items-center gap-2">
      {isAuthenticated ? (
        <UserDropdown
          avatarUrl={user?.avatar}
          email={user?.email}
          firstName={user?.firstName}
          lastName={user?.lastName}
        />
      ) : (
        <DesktopActions className="hidden xl:flex items-center gap-x-2" />
      )}

      <MobileMenu className="xl:hidden" isAuthenticated={isAuthenticated} />
    </div>
  )
}
