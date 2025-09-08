import Link from 'next/link'
import { LogIn, UserPlus } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/utils/cn'
import { UserDropdown } from '@/components/userDropdown'
import { GetCurrentUserResponse } from '@/types/users'
import { verifyUser } from '@/lib/verifyUser'

export async function AuthActions() {
  let user: GetCurrentUserResponse | undefined = undefined
  let isAuthenticated = false
  const result = await verifyUser()

  if (result.success) {
    isAuthenticated = true
    user = result.data
  }

  if (isAuthenticated) {
    return (
      <UserDropdown
        avatarUrl={user?.avatar}
        email={user?.email}
        firstName={user?.firstName}
        lastName={user?.lastName}
      />
    )
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        className={cn('justify-start gap-2', buttonVariants({ variant: 'ghost' }))}
        href="/login"
      >
        <LogIn className="w-4 h-4" />
        <span className="sr-only sm:not-sr-only">Login</span>
      </Link>

      <Link className={cn('justify-start gap-2', buttonVariants())} href="/register">
        <UserPlus className="w-4 h-4" />
        <span className="sr-only sm:not-sr-only">Cadastrar</span>
      </Link>
    </div>
  )
}
