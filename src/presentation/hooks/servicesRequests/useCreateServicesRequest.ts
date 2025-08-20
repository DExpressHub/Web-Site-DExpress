import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { serviceRequestsUseCase } from '@/presentation/factories/useCase/servicesRequets'
import { CreateServiceRequestParams } from '@/core/types/serviceRequest'

export function useServiceRequestsUseCase() {
  const mutation = useMutation({
    mutationFn: async (data: CreateServiceRequestParams) => {
      const result = await serviceRequestsUseCase.create.execute(data)

      if (!result.success) {
        toast.error('Erro ao enviar Solicitação!')

        return null
      }

      toast.success('Solicitação enviada com sucesso!')

      return result
    },
  })

  return {
    createServiceRequest: mutation.mutate,
    createServiceRequestAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
  }
}
