'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

import { useCreateUser } from '@/hooks/users/useCreateRegister'
import { links } from '@/config/links'
const registerSchema = z.object({
  lastName: z
    .string()
    .min(1, 'Sobrenome é obrigatório')
    .max(50, 'Sobrenome deve ter no máximo 50 caracteres'),
  email: z.string().email('Email inválido'),
  firstName: z
    .string()
    .min(1, 'O Nome é obrigatório')
    .max(50, 'O Nome deve ter no máximo 50 caracteres'),
})

type RegisterData = z.infer<typeof registerSchema>
export function useRegisterForm() {
  const { push } = useRouter()
  const form = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  })
  const { isPending, createUserAsync } = useCreateUser()

  const onSubmit = async (data: RegisterData) => {
    const result = await createUserAsync({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      type: 'INDIVIDUAL',
    })

    if (result?.success) {
      push(links.login)
    }
  }

  return { onSubmit, form, isPending }
}
