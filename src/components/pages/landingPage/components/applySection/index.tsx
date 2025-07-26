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
      <div className="max-w-7xl mx-auto px-5">
        <ApplyFormProvider cities={cities}>
          <ApplyForm />
        </ApplyFormProvider>
      </div>
    </section>
  )
}
