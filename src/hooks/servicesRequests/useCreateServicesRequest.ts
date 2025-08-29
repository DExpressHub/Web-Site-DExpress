import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { CreateServiceRequestParams } from '@/types/serviceRequest'
import { serviceRequestAction } from '@/actions/servicesRequest'

export function useServiceRequestsUseCase() {
  const mutation = useMutation({
    mutationFn: async (data: CreateServiceRequestParams) => {
      const result = await serviceRequestAction(data)

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
