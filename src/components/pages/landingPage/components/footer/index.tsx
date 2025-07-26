/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img alt="Logo DExpress" className="h-12 w-auto" src="/placeholder.svg" />
            </div>
            <p className="text-sm text-gray-300">Conectando lares e carreiras com confiança.</p>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <button
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => scrollToSection('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => scrollToSection('search')}
                >
                  Profissionais
                </button>
              </li>
              <li>
                <button
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => scrollToSection('apply')}
                >
                  Trabalhe Connosco
                </button>
              </li>
              <li>
                <button
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => scrollToSection('how-it-works')}
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => scrollToSection('contact')}
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-sm text-gray-300 hover:text-blue-400 transition-colors" href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a className="text-sm text-gray-300 hover:text-blue-400 transition-colors" href="#">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a className="text-sm text-gray-300 hover:text-blue-400 transition-colors" href="#">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <button
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => scrollToSection('contact')}
                >
                  Fale Conosco
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3">Siga-nos</h3>
            <div className="flex space-x-4">
              <a
                aria-label="Facebook"
                className="text-gray-300 hover:text-blue-400 text-lg transition-colors"
                href="#"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                aria-label="Instagram"
                className="text-gray-300 hover:text-blue-400 text-lg transition-colors"
                href="#"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-blue-400 text-lg transition-colors"
                href="#"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                aria-label="Twitter"
                className="text-gray-300 hover:text-blue-400 text-lg transition-colors"
                href="#"
              >
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-300">© 2025 D-Express. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
