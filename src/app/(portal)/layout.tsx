import { Navbar } from './components/navbar'

import { GetCurrentUserResponse } from '@/types/users'
import { verifyUser } from '@/lib/verifyUser'

export default async function ProfessionalsLayout({ children }: { children: React.ReactNode }) {
  let user: GetCurrentUserResponse | undefined = undefined
  let isAuthenticated = false
  const result = await verifyUser()

  if (result.success) {
    isAuthenticated = true
    user = result.data
  }

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} user={user} />
      <div className="max-w-[120rem] w-full mx-auto px-4">{children}</div>
    </>
  )
}
