'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useCreateUser } from '@/hooks/users/useCreateRegister'
const registerSchema = z.object({
  lastName: z
    .string()
    .min(1, 'SSobrenome é obrigatório')
    .max(50, 'Sobrenome deve ter no máximo 50 caracteres'),
  email: z.string().email('Email inválido'),
  firstName: z
    .string()
    .min(1, 'O Nome é obrigatório')
    .max(50, 'O Nome deve ter no máximo 50 caracteres'),
})

type RegisterData = z.infer<typeof registerSchema>
export function useRegisterForm() {
  const form = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  })
  const { createUser, isPending } = useCreateUser()

  const onSubmit = (data: RegisterData) => {
    createUser({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      type: 'INDIVIDUAL',
    })
  }

  return { onSubmit, form, isPending }
}
