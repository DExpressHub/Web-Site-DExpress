import { cookies } from 'next/headers'

import { Navbar } from './_components/navbar'

export default async function ProfessionalsLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('NEXT_access_token')

  return (
    <>
      <Navbar isAuthenticated={!!accessToken} />
      <div className="max-w-[120rem] w-full mx-auto px-4">{children}</div>
    </>
  )
}
