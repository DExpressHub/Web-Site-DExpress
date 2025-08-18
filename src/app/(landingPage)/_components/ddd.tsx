'use client'
import { useState } from 'react'
import { Building2, Phone, MapPin, Send, FileText } from 'lucide-react'
import { toast } from 'sonner'

import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card'
import { Input } from '@/presentation/components/ui/input'
import { Label } from '@/presentation/components/ui/label'
import { Textarea } from '@/presentation/components/ui/textarea'
import { Button } from '@/presentation/components/ui/button'

export function BecomeClientSection() {
  const [formData, setFormData] = useState({
    companyName: '',
    cnpjOrNif: '',
    email: '',
    phone: '',
    address: '',
    businessDescription: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Nova solicitação de cliente:', formData)
    toast.success('mmmmm')
    setFormData({
      companyName: '',
      cnpjOrNif: '',
      email: '',
      phone: '',
      address: '',
      businessDescription: '',
    })
  }

  const infoBlocks = [
    {
      icon: Building2,
      title: 'Seja nosso parceiro',
      content: 'Envie seus dados para avaliação',
      description: 'Após análise, retornaremos com as próximas etapas',
    },
    {
      icon: Phone,
      title: 'Suporte ao Cliente',
      content: '+244 999 000 000',
      description: 'Seg-Sex: 8h às 18h',
    },
    {
      icon: MapPin,
      title: 'Cobertura',
      content: 'Atendemos todo território nacional',
      description: 'Presença em várias províncias',
    },
  ]

  return (
    <section className="py-20 bg-background" id="become-client">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Torne-se Cliente</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Se você representa uma empresa ou está abrindo uma, envie seus dados básicos para
            solicitar ser cliente da nossa plataforma.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Como funciona?</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Preencha o formulário com as informações solicitadas. Nossa equipe analisará sua
                solicitação e entrará em contato para dar continuidade ao processo de integração.
              </p>
            </div>

            <div className="space-y-6">
              {infoBlocks.map((info, index) => {
                const Icon = info.icon

                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-lg text-foreground mb-1">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* FAQ */}
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Dúvidas sobre o cadastro</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Consulte nossa FAQ para entender como funciona o processo de aprovação e quais são
                  os benefícios para clientes da plataforma.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Formulário */}
          <Card className="shadow-elegant border-0 overflow-hidden">
            <CardHeader className="bg-linear-to-r from-primary/5 to-accent/5">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Send className="w-5 h-5 text-primary" />
                Solicitação de Cadastro
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="company-name">Nome da Empresa *</Label>
                  <Input
                    required
                    className="h-12"
                    id="company-name"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, companyName: e.target.value }))
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cnpj-nif">NIF *</Label>
                  <Input
                    required
                    className="h-12"
                    id="if"
                    value={formData.cnpjOrNif}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, cnpjOrNif: e.target.value }))
                    }
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      required
                      className="h-12"
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input
                      required
                      className="h-12"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Endereço *</Label>
                  <Input
                    required
                    className="h-12"
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="business-description">Descrição do Negócio *</Label>
                  <Textarea
                    required
                    className="min-h-[120px]"
                    id="business-description"
                    placeholder="Fale brevemente sobre o seu negócio..."
                    value={formData.businessDescription}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, businessDescription: e.target.value }))
                    }
                  />
                </div>

                <Button className="w-full text-lg py-6" size="lg" type="submit">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Solicitação
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
