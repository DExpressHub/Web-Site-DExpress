import { Button, Form } from '@heroui/react'
import { Send } from 'lucide-react'
import React from 'react'

import { useApplyForm } from '../../hooks'

import { PersonalInfo } from './personalInfo'
import { ProfessionalInfo } from './professionalInfo'
import { Education } from './education'
import { Location } from './location'

function SubmitSection() {
  return (
    <Button
      fullWidth
      color="primary"
      startContent={<Send className="h-5 w-5" />}
      type="submit"
      variant="ghost"
    >
      Enviar Cadastro via WhatsApp
    </Button>
  )
}

export function ApplyForm() {
  const { onSubmit } = useApplyForm()

  return (
    <Form className="space-y-8 max-w-4xl mx-auto" onSubmit={onSubmit}>
      <PersonalInfo />
      <ProfessionalInfo />
      <Education />
      <Location />
      <SubmitSection />
    </Form>
  )
}
