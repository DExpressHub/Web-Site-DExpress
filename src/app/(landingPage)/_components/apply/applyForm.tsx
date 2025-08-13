'use client'
import { LoaderCircle, Send } from 'lucide-react'
import React from 'react'

import { useApplyForm } from './applyFormProvider'

import { Button } from '@/presentation/components/ui/button'
import { Form } from '@/presentation/components/ui/form'

export function ApplyForm() {
  const { form, isLoading, currentStep, steps, handleNextOrSubmit, handleBack } = useApplyForm()

  return (
    <Form {...form}>
      <form className="space-y-6">
        {steps[currentStep].component}
        <div className="flex justify-between gap-4">
          {currentStep > 0 && (
            <Button
              className=" cursor-pointer"
              type="button"
              variant="outline"
              onClick={handleBack}
            >
              Voltar
            </Button>
          )}

          <Button
            className="cursor-pointer"
            disabled={isLoading}
            type="button"
            onClick={handleNextOrSubmit}
          >
            {isLoading ? (
              <>
                <LoaderCircle className="w-5 h-5 animate-spin mr-2" />
                Enviando...
              </>
            ) : currentStep < steps.length - 1 ? (
              'Próximo'
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Enviar
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
