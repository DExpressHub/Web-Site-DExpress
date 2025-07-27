import { Image } from '@heroui/react'

import { ApplyFormProvider } from './providers'
import { ApplyForm } from './components'

import { City } from '@/types'

type ApplySectionProps = {
  id?: string

  cities: City[]
}

export function ApplySection(props: ApplySectionProps) {
  const { id, cities } = props

  return (
    <section className="py-20" id={id}>
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        <ApplyFormProvider cities={cities}>
          <ApplyForm />
        </ApplyFormProvider>

        <Image alt="Description" className="lg:block hidden" src="/fn2.jpg" />
      </div>
    </section>
  )
}
