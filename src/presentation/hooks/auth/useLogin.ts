'use client'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

import { LoginRequest } from '@/core/types/auth'
import { authUseCase } from '@/presentation/factories/useCase/auth'
import { setAuthCookies } from '@/presentation/actions/setAuthCookies'

export function useLogin() {
  const router = useRouter()
  const mutation = useMutation({
    mutationFn: async (data: LoginRequest) => {
      const result = await authUseCase.login.execute(data)

      if (!result.success) {
        if (result.error.statusCode === 401) {
          toast.error(result.error.message)

          return
        }
        toast.error('Erro ao efetuar registro')

        return
      }

      await setAuthCookies({
        refreshToken: result.data.refreshToken,
        accessToken: result.data.accessToken,
      })
      toast.success('Login efetuado com sucesso!')
      router.push('/profissionais')
    },
  })

  return {
    login: mutation.mutate,
    loginAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
  }
}
