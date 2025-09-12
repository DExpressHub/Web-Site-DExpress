import Link from 'next/link'

export function CardSupportContact() {
  return (
    <div className="text-center mt-12">
      <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-foreground mb-4">Ainda tem dúvidas?</h3>
        <p className="text-muted-foreground mb-6">
          Nossa equipa está pronta para ajudar você. Entre em contacto conosco!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            href="https://wa.me/244937759809"
            rel="noopener noreferrer"
            target="_blank"
          >
            WhatsApp: +244 937 759 809
          </Link>
          <Link
            className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
            href="mailto:dexpressgeral@gmail.com"
          >
            dexpressgeral@gmail.com
          </Link>
        </div>
      </div>
    </div>
  )
}
