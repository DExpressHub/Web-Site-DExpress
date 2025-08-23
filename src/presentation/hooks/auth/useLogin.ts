import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { LoginRequest } from '@/core/types/auth'
import { authUseCase } from '@/presentation/factories/useCase/auth'

export function useLogin() {
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

      toast.success('Login efetuado com sucesso!')
    },
  })

  return {
    login: mutation.mutate,
    loginAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
  }
}
