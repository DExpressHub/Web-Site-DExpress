'use client'
import { ContactRound } from 'lucide-react'

import { useApplyForm } from './applyFormProvider'

import { InputFormField } from '@/components/inputFormField'

export function Contact() {
  const { form } = useApplyForm()

  return (
    <section className="flex-col flex gap-6 w-full">
      <div className="flex items-center gap-2 mb-4">
        <ContactRound className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Contactos</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <InputFormField
          control={form.control}
          label="Email"
          name="email"
          placeholder="Digite seu email"
          type="email"
        />

        <InputFormField
          control={form.control}
          label="Telefone"
          name="phoneNumber"
          placeholder="+244 999 999 999"
          type="tel"
        />
        <InputFormField
          disabled
          control={form.control}
          label="Telefone Optional"
          name="optionalPhoneNumber"
          placeholder="+244 999 999 999"
          type="tel"
        />
      </div>
    </section>
  )
}
