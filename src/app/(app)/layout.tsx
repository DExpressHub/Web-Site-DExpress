import { Navbar } from './components/navbar'

import { checkAuth } from '@/actions/checkAuth'

export default async function ProfessionalsLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = await checkAuth()

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <div className="max-w-[120rem] w-full mx-auto px-4">{children}</div>
    </>
  )
}
