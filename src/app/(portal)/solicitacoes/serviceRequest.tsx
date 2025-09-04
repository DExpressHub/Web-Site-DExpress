import React from 'react'
import { Calendar, Mail, Phone, MapPin, User, Clock, FileText } from 'lucide-react'
import { cookies } from 'next/headers'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { type ServiceFrequency } from '@/constants'
import { listServiceRequestsByUserIdService } from '@/services/servicesRequest/listServiceRequestByUser'
import { UnauthorizedError } from '@/errors'

export async function ServiceRequest() {
  const cookiesStories = await cookies()
  const userId = cookiesStories.get('user_id')?.value

  if (!userId) {
    throw new UnauthorizedError()
  }

  const response = await listServiceRequestsByUserIdService(userId)

  if (!response.success) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Ocorreu um erro ao carregar as solicitações. Tente novamente mais tarde.</p>
      </div>
    )
  }

  const data = response.data

  return (
    <div className="py-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((request) => (
          <Card
            key={request.id}
            className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-primary"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    {request.individualRequesterName}
                  </CardTitle>
                </div>
                <Badge className={`ml-2 ${getFrequencyColor(request.serviceFrequency)}`}>
                  {getFrequencyLabel(request.serviceFrequency)}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm ">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="truncate">{request.requesterEmail}</span>
                </div>

                <div className="flex items-center gap-2 text-sm ">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>{request.requesterPhoneNumber}</span>
                </div>

                <div className="flex items-start gap-2 text-sm ">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-2">{request.individualAddress}</span>
                </div>

                <div className="flex items-start gap-2 text-sm ">
                  <FileText className="w-4 h-4  mt-0.5 flex-shrink-0" />
                  <p className="line-clamp-3">{truncateText(request.description)}</p>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 pt-2 border-t border-border">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>{formatDate(request.createdAt)}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <Badge
                  className="bg-orange-100 text-orange-800 hover:bg-orange-100 hover:text-orange-800"
                  variant="secondary"
                >
                  <Clock className="w-3 h-3 mr-1" />
                  {request.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

const getFrequencyLabel = (frequency: ServiceFrequency): string => {
  const labels: Record<ServiceFrequency, string> = {
    MONTHLY: 'Mensal',
    BIMONTHLY: 'Bimestral',
    QUARTERLY: 'Trimestral',
    ANNUALLY: 'Anual',
    BIENNIALLY: 'Biennial',
    SEMIANNUALLY: 'Semianual',
  }

  return labels[frequency] || frequency
}

const getFrequencyColor = (frequency: ServiceFrequency): string => {
  const colors: Record<ServiceFrequency, string> = {
    MONTHLY: 'bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800',
    BIMONTHLY: 'bg-blue-100 text-blue-800 hover:bg-blue-100 hover:text-blue-800',
    QUARTERLY: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100 hover:text-yellow-800',
    ANNUALLY: 'bg-purple-100 text-purple-800 hover:bg-purple-100 hover:text-purple-800',
    BIENNIALLY: 'bg-pink-100 text-pink-800 hover:bg-pink-100 hover:text-pink-800',
    SEMIANNUALLY: 'bg-orange-100 text-orange-800 hover:bg-orange-100 hover:text-orange-800',
  }

  return colors[frequency] || 'bg-gray-100 text-gray-800'
}

const truncateText = (text: string, maxLength: number = 150): string => {
  if (text.length <= maxLength) return text

  return text.substring(0, maxLength) + '...'
}
