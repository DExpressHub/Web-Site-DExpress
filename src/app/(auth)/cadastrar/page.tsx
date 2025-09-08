import { UserPlus } from 'lucide-react'
import Link from 'next/link'

import { RegisterForm } from './_components/form'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'

export default function Register() {
  return (
    <div className="min-h-screen bg-linear-to-br from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-elegant">
        <CardHeader className="text-center">
          <Link className="text-primary hover:underline font-medium" href="/">
            Home
          </Link>
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <UserPlus className="w-6 h-6 text-primary" />
            Crie sua conta
          </CardTitle>
        </CardHeader>
        <RegisterForm />
      </Card>
    </div>
  )
}
