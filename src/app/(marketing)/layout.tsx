import { Footer } from './components/footer'
import { Navbar } from './components/navbar'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="min-h-screen bg-background">{children}</div>
      <Footer />
    </div>
  )
}
