import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { RequestRecoveryForm } from './components/request-recovery-form'

export default function RequestRecoveryPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Recuperar Senha</CardTitle>
        </CardHeader>
        <CardContent>
          <RequestRecoveryForm />
        </CardContent>
      </Card>
    </div>
  )
}
