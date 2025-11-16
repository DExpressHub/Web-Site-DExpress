import { contacts } from '@/config/contacts'

export default function TermsPage() {
  return (
    <main className="py-32 max-[120rem] mx-auto px-4 w-full">
      <section>
        <div className="w-full mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Termos de Uso</h1>
            <p className="text-lg text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-AO')}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Aceitação dos Termos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao aceder e utilizar a plataforma D Express, você concorda em cumprir e estar
                sujeito aos seguintes termos e condições de uso. Se não concordar com qualquer parte
                destes termos, não deve utilizar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Descrição do Serviço
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A D Express é uma plataforma digital que conecta empregadores a profissionais
                domésticos qualificados em Angola. Nossos serviços incluem:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Cadastro e verificação de profissionais domésticos</li>
                <li>Sistema de busca e filtros para encontrar profissionais</li>
                <li>Facilitação do contacto entre empregadores e profissionais</li>
                <li>Suporte ao cliente e resolução de conflitos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Cadastro e Responsabilidades
              </h2>
              <h3 className="text-lg font-medium text-foreground mb-3">3.1 Para Empregadores</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Fornecer informações verdadeiras e atualizadas</li>
                <li>Tratar os profissionais com respeito e dignidade</li>
                <li>Cumprir a legislação trabalhista angolana</li>
                <li>Comunicar de forma clara sobre expectativas e condições de trabalho</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-3">3.2 Para Profissionais</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Fornecer informações precisas sobre qualificações e experiência</li>
                <li>Manter referências atualizadas e verificáveis</li>
                <li>Cumprir os acordos estabelecidos com empregadores</li>
                <li>Manter conduta profissional em todos os momentos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Verificação e Segurança
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A D Express implementa processos de verificação para todos os profissionais
                cadastrados, incluindo:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Verificação de documentos de identificação</li>
                <li>Contacto com referências fornecidas</li>
                <li>Entrevistas de avaliação</li>
                <li>Verificação de antecedentes criminais quando aplicável</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Pagamentos e Taxas</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A utilização da plataforma pode estar sujeita a taxas de serviço. Todas as taxas
                serão claramente comunicadas antes da conclusão de qualquer transação. Os pagamentos
                entre empregadores e profissionais são acordados diretamente entre as partes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibred text-foreground mb-4">
                6. Limitação de Responsabilidade
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A D Express atua como facilitadora do contacto entre empregadores e profissionais.
                Recomendamos que todas as relações de trabalho sejam formalizadas através de
                contratos adequados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Uso Aceitável</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                É proibido utilizar a plataforma para:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Atividades ilegais ou fraudulentas</li>
                <li>
                  Discriminação com base em raça, género, religião ou outras características
                  protegidas
                </li>
                <li>Assédio ou comportamento inadequado</li>
                <li>Violação dos direitos de propriedade intelectual</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Modificações dos Termos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As
                modificações entrarão em vigor imediatamente após a publicação na plataforma. É
                responsabilidade do utilizador verificar periodicamente os termos atualizados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para questões relacionadas com estes termos, entre em contacto conosco através de:
              </p>
              <ul className="list-none text-muted-foreground space-y-2 ml-4 mt-4">
                <li>E-mail: {contacts.geralEmail}</li>
                <li>Telefone: {contacts.geralPhoneNumber.label}</li>
                <li>WhatsApp: {contacts.geralPhoneNumber.label}</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
