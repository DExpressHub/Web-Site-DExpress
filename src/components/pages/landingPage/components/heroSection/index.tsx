import { Avatar, AvatarGroup, Button } from '@heroui/react'
import { Search, UserPlus } from 'lucide-react'

import { useNavItem } from '../navbar/useNavItem'

import { useScrollTo } from '@/hooks'

export function HeroSection({ id }: { id?: string }) {
  const navItems = useNavItem()
  const navigateTo = useScrollTo()
  const contact = navItems.find((item) => item.id === 'contact')
  const workWithUs = navItems.find((item) => item.id === 'work-with-us')

  return (
    <section
      className=" relative bg-[linear-gradient(135deg,#0b1638_0%,#2a508b_100%)]  before:bg-[url(/fn4.jpg)] min-h-[90vh] flex items-center justify-center text-white pt-20 before:absolute before:left-0 before:top-0 overflow-hidden before:right-0 before:w-full before:h-full before:bg-cover before:bg-center before:bg-no-repeat  before:opacity-10 before:content-['']"
      id={id}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-8 relative z-10">
        <div className="md:w-1/2 text-left mb-10 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 playfair">
            Conexões que transformam lares e carreiras
          </h1>
          <p className="text-base md:text-lg font-light mb-6 opacity-90 max-w-md">
            Conectamos empregadores a profissionais domésticas qualificadas, com segurança e
            eficiência.
          </p>

          <div className="flex space-x-3">
            <Button
              color="primary"
              startContent={<Search size={16} />}
              onPress={() => navigateTo(contact?.id!)}
            >
              Contratar
            </Button>
            <Button
              color="secondary"
              startContent={<UserPlus size={16} />}
              onPress={() => navigateTo(workWithUs?.id!)}
            >
              Trabalhe Connosco
            </Button>
          </div>

          <div className="mt-8 flex items-center space-x-3">
            <AvatarGroup isBordered max={3}>
              <Avatar src="/pessoa.jpg" />
              <Avatar src="/pessoa1.jpg" />
              <Avatar src="/pessoa2.jpg" />
            </AvatarGroup>
            <div className="text-xs">
              <p className="font-semibold">+2.500 profissionais</p>
              <p className="opacity-80">cadastradas na plataforma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
