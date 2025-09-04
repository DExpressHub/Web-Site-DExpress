'use client'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

import { LoginRequest } from '@/types/auth'
import { setAuthCookies } from '@/actions/setAuthCookies'
import { loginAction } from '@/actions/auth'

export function useLogin() {
  const router = useRouter()
  const mutation = useMutation({
    mutationFn: async (data: LoginRequest) => {
      const result = await loginAction(data)

      if (!result.success) {
        if (result.error.statusCode === 401) {
          toast.error(result.error.message)

          return
        }
        toast.error('Erro ao efetuar Login. Tente novamente mais tarde.')

        return
      }

      await setAuthCookies({
        refreshToken: result.data.refreshToken,
        accessToken: result.data.accessToken,
        userId: result.data.user.id,
      })
      toast.success('Login efetuado com sucesso!')
      router.push('/')
    },
  })

  return {
    login: mutation.mutate,
    loginAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
  }
}
