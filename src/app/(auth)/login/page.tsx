import { LogIn } from 'lucide-react'
import Link from 'next/link'

import { LoginForm } from './form'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Login() {
  return (
    <div className="min-h-screen bg-linear-to-br from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-elegant">
        <CardHeader className="text-center">
          <Link className="text-primary hover:underline font-medium" href="/">
            Home
          </Link>
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <LogIn className="w-6 h-6 text-primary" />
            Entrar
          </CardTitle>
          <p className="text-muted-foreground">Acesse sua conta</p>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  )
}
