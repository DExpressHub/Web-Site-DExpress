import { CheckCircle } from 'lucide-react'

export function TrustIndicator() {
  return (
    <div className="flex items-center space-x-2 text-success">
      <CheckCircle className="w-5 h-5" />
      <span className="font-medium">Referências verificadas</span>
    </div>
  )
}
