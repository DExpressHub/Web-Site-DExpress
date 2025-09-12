export default function PrivacyPage() {
  return (
    <main className="py-32 max-[120rem] mx-auto px-4 w-full">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Política de Privacidade
            </h1>
            <p className="text-lg text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-AO')}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introdução</h2>
              <p className="text-muted-foreground leading-relaxed">
                A D Express respeita e protege a privacidade de todos os utilizadores da nossa
                plataforma. Esta política de privacidade explica como coletamos, utilizamos,
                armazenamos e protegemos as suas informações pessoais quando utiliza os nossos
                serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Informações que Coletamos
              </h2>

              <h3 className="text-lg font-medium text-foreground mb-3">
                2.1 Informações de Cadastro
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Nome completo e dados de identificação</li>
                <li>Endereço de e-mail e número de telefone</li>
                <li>Endereço residencial</li>
                <li>Informações profissionais e experiência</li>
                <li>Documentos de identificação (quando necessário para verificação)</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-3">
                2.2 Informações de Utilização
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Dados de navegação e interação com a plataforma</li>
                <li>Endereço IP e informações do dispositivo</li>
                <li>Cookies e tecnologias similares</li>
                <li>Histórico de pesquisas e atividades na plataforma</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-3">
                2.3 Informações de Comunicação
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Mensagens trocadas através da plataforma</li>
                <li>Feedback e avaliações</li>
                <li>Contactos com o suporte ao cliente</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Como Utilizamos as Suas Informações
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos as suas informações para os seguintes propósitos:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Fornecer e melhorar os nossos serviços</li>
                <li>Facilitar a conexão entre empregadores e profissionais</li>
                <li>Verificar a identidade e qualificações dos utilizadores</li>
                <li>Comunicar sobre atualizações, ofertas e serviços</li>
                <li>Prevenir fraudes e garantir a segurança da plataforma</li>
                <li>Cumprir obrigações legais e regulamentares</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Partilha de Informações
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Não vendemos, alugamos ou partilhamos as suas informações pessoais com terceiros,
                exceto nas seguintes circunstâncias:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Com o seu consentimento explícito</li>
                <li>Para facilitar a conexão entre empregadores e profissionais na plataforma</li>
                <li>Com prestadores de serviços que nos auxiliam na operação da plataforma</li>
                <li>Quando exigido por lei ou autoridades competentes</li>
                <li>
                  Para proteger os direitos, propriedade ou segurança da D Express e dos
                  utilizadores
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Segurança das Informações
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Implementamos medidas de segurança técnicas e organizacionais para proteger as suas
                informações:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Encriptação de dados sensíveis</li>
                <li>Acesso restrito às informações pessoais</li>
                <li>Monitorização regular de sistemas de segurança</li>
                <li>Formação de funcionários sobre proteção de dados</li>
                <li>Auditorias de segurança periódicas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Retenção de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos as suas informações pessoais apenas pelo tempo necessário para cumprir os
                propósitos para os quais foram coletadas, ou conforme exigido por lei. Após este
                período, as informações são eliminadas de forma segura.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Os Seus Direitos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Você tem os seguintes direitos em relação às suas informações pessoais:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Acesso às informações que mantemos sobre você</li>
                <li>Correção de informações incorretas ou desatualizadas</li>
                <li>Eliminação das suas informações pessoais</li>
                <li>Restrição do processamento das suas informações</li>
                <li>Portabilidade dos seus dados</li>
                <li>Objeção ao processamento das suas informações</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Cookies e Tecnologias Similares
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies e tecnologias similares para melhorar a sua experiência na
                plataforma, personalizar conteúdo e anúncios, fornecer funcionalidades de redes
                sociais e analisar o nosso tráfego. Pode controlar o uso de cookies através das
                configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Alterações a Esta Política
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta política de privacidade periodicamente. Notificaremos sobre
                alterações significativas através da plataforma ou por e-mail. Recomendamos que
                revise esta política regularmente para se manter informado sobre como protegemos as
                suas informações.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Se tiver questões sobre esta política de privacidade ou sobre o tratamento das suas
                informações pessoais, contacte-nos através de:
              </p>
              <ul className="list-none text-muted-foreground space-y-2 ml-4">
                <li>E-mail: privacidade@dexpress.com.ao</li>
                <li>Telefone: +244 937 760 239</li>
                <li>WhatsApp: +244 937 759 809</li>
                <li>Endereço: [Endereço da empresa em Angola]</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
