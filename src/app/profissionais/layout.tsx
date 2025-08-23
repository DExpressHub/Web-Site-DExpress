import { Navbar } from './_components/navbar'

export default function ProfessionalsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="max-w-[120rem] w-full mx-auto px-4">{children}</div>
    </>
  )
}
