import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { CreateUserRequest } from '@/core/types/users'
import { usersUseCase } from '@/presentation/factories/useCase/users'

export function useCreateUser() {
  const mutation = useMutation({
    mutationFn: async (data: CreateUserRequest) => {
      const result = await usersUseCase.create.execute(data)

      if (!result.success) {
        if (result.error.statusCode === 400) {
          toast.error(result.error.message)

          return
        }
        toast.error('Erro ao efetuar registro')

        return
      }

      toast.success(result.data.message)
    },
  })

  return {
    createUser: mutation.mutate,
    createUserAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
  }
}
