'use client'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export function BackButton() {
  const router = useRouter()

  return (
    <Button
      className="flex items-center gap-2 cursor-pointer"
      size="sm"
      variant="outline"
      onClick={() => router.back()}
    >
      <ArrowLeft size={16} />
      Voltar
    </Button>
  )
}
