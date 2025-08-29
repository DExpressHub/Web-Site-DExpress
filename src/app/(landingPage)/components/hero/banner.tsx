import Image from 'next/image'

import { FloatingStatsCard } from './floatingStatsCard'

export function Banner() {
  return (
    <div className="relative">
      <div className="relative w-full  h-[600px] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          fill
          priority
          alt="Profissional doméstica"
          className="object-cover"
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 920px"
          src="/hero-image.webp"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
      </div>

      <FloatingStatsCard />
    </div>
  )
}
