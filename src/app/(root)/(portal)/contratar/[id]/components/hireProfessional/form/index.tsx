'use client'

import { z } from 'zod'
import { LoaderCircle, Send } from 'lucide-react'

import { formSchema, useHireFormClient } from './provider'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { SelectFormField } from '@/components/SelectFormField'
import { TextareaFormField } from '@/components/textareaFormField'
import { serviceFrequency } from '@/constants'
import { useServiceRequestsUseCase } from '@/hooks/servicesRequests/useCreateServicesRequest'
import { InputFormField } from '@/components/inputFormField'
import { Profissional } from '@/types/professional'
const reset = {
  description: '',
  serviceFrequency: '',
  individualAddress: '',
  individualIdentityNumber: '',
  requesterPhoneNumber: '',
}

export const HireForm = ({ professional }: { professional: Profissional }) => {
  const { isPending, createServiceRequestAsync } = useServiceRequestsUseCase()
  const { form, user } = useHireFormClient()

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const result = await createServiceRequestAsync({
      requesterType: user.type as 'INDIVIDUAL',
      description: data.description,
      serviceFrequency: data.serviceFrequency,
      requesterEmail: user.email,
      requesterPhoneNumber: data.requesterPhoneNumber,
      individualRequesterName: `${user.firstName} ${user.lastName}`,
      individualIdentityNumber: data.individualIdentityNumber,
      individualAddress: data.individualAddress,
      individualUserId: user.id,
      professionalId: professional.id,
    })

    if (result?.success) {
      form.reset(reset)
    }
  }

  return (
    <Form {...form}>
      <form className="lg:col-span-2" onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="p-6">
          <div className="space-y-6">
            <div className="pt-6">
              <h3 className="font-semibold text-foreground mb-4">Detalhes do Serviço</h3>

              <div className="space-y-4">
                <div className="grid lg:grid-cols-2 gap-4">
                  <InputFormField
                    control={form.control}
                    label="Endereço"
                    name="individualAddress"
                    placeholder="Digite o Endereço"
                  />
                  <InputFormField
                    control={form.control}
                    label="BI"
                    name="individualIdentityNumber"
                    placeholder="Digite o Número do Bilhete Identidade"
                  />
                </div>
                <div className="grid lg:grid-cols-2 gap-4">
                  <InputFormField
                    control={form.control}
                    label="Telefone"
                    name="requesterPhoneNumber"
                    placeholder="Digite o Telefone"
                  />
                  <SelectFormField
                    control={form.control}
                    items={serviceFrequency}
                    label="Frequência de serviço"
                    name="serviceFrequency"
                    placeholder="Selecione a Frequência"
                  />
                </div>

                <TextareaFormField
                  control={form.control}
                  label="Descrição"
                  name="description"
                  placeholder=""
                />
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Button className="cursor-pointer" disabled={isPending} type="submit">
                {isPending ? (
                  <>
                    <LoaderCircle className="w-5 h-5 animate-spin mr-2" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar
                  </>
                )}
              </Button>
              <Button
                className="cursor-pointer"
                type="button"
                variant="outline"
                onClick={() => form.reset({ ...reset })}
              >
                Cancelar
              </Button>
            </div>
          </div>
        </Card>
      </form>
    </Form>
  )
}
