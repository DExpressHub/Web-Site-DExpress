import { Search, Phone, Mail, MessageCircle, FileText, Users, Shield } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function HelpCenterPage() {
  const helpCategories = [
    {
      icon: Users,
      title: 'Cadastro e Perfil',
      description: 'Como criar conta, editar perfil e gerenciar informações',
      topics: [
        'Criar conta cliente',
        'Criar conta profissional',
        'Editar perfil',
        'Verificação de conta',
      ],
    },
    {
      icon: Search,
      title: 'Busca e Contratação',
      description: 'Como encontrar e contratar profissionais',
      topics: [
        'Buscar profissionais',
        'Filtros de busca',
        'Processo de contratação',
        'Agendamento',
      ],
    },
    {
      icon: Shield,
      title: 'Segurança e Verificação',
      description: 'Informações sobre segurança e verificações',
      topics: ['Verificação de profissionais', 'Políticas de segurança', 'Denúncias', 'Garantias'],
    },
    {
      icon: FileText,
      title: 'Documentação',
      description: 'Contratos, termos e documentos importantes',
      topics: ['Termos de uso', 'Política de privacidade', 'Contratos', 'Documentação necessária'],
    },
  ]

  return (
    <main className="max-w-[120rem] w-full mx-auto px-4">
      <section className="py-32">
        <div className=" max-w-5xl w-full mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Central de Ajuda
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Encontre tudo o que precisa para usar a plataforma D Express
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input className="pl-10" placeholder="Pesquisar na ajuda..." />
            </div>
          </div>

          {/* Quick Contact */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Telefone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Fale diretamente com nossa equipa</p>
                <Button className="w-full" variant="outline">
                  +244 937 760 239
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Atendimento rápido via WhatsApp</p>
                <Button className="w-full" variant="outline">
                  +244 937 759 809
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Mail className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">E-mail</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Envie sua dúvida por e-mail</p>
                <Button className="w-full" variant="outline">
                  suporte@dexpress.com.ao
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Categorias de Ajuda
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {helpCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                        <CardDescription className="mt-2">{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                        >
                          • {topic}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Hours and Support Info */}
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">Horário de Atendimento</h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipa está disponível para ajudar você nos seguintes horários:
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div>
                <p className="font-medium text-foreground">Segunda a Sexta</p>
                <p className="text-muted-foreground">08:00 às 18:00</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Sábado</p>
                <p className="text-muted-foreground">08:00 às 14:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
