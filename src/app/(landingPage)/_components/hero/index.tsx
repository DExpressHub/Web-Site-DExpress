import { Info } from './info'
import { Banner } from './banner'
import { BackgroundDecoration } from './backgroundDecoration'

export function HeroSection() {
  return (
    <section
      className="flex items-center justify-center relative overflow-hidden bg-linear-to-br from-primary/10 via-background to-accent/5"
      id="home"
    >
      <BackgroundDecoration />
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Info />
          <Banner />
        </div>
      </div>
    </section>
  )
}
