'use client'
import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LucideLoader2 } from 'lucide-react'
import { links } from '@/config/links'
import { ResetPasswordForm } from '../components/reset-password-form'

function ResetPasswordContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const token = searchParams.get('token')

  const [isPageLoading, setIsPageLoading] = useState(true)

  // Redireciona se não tiver token
  useEffect(() => {
    if (!token) {
      router.replace(`/${links.recuperarSenha}`)
    }
  }, [token, router])

  // Loading inicial (300ms)
  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoading(false), 300)
    return () => clearTimeout(timer)
  }, [])

  // --- Loading inicial ---
  if (isPageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="py-12 text-center">
            <LucideLoader2 className="animate-spin h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-lg font-medium">Carregando...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  // --- Redirecionando (sem token) ---
  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="py-12 text-center">
            <LucideLoader2 className="animate-spin h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-lg font-medium">Redirecionando...</p>
            <p className="text-sm text-muted-foreground">
              Você precisa de um link válido.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Criar Nova Senha</CardTitle>
        </CardHeader>
        <CardContent>
          <ResetPasswordForm token={token} />
        </CardContent>
      </Card>
    </div>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense>
      <ResetPasswordContent />
    </Suspense>
  )
}
