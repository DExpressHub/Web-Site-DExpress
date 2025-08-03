import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function SocialProof() {
  return (
    <div className="flex items-center space-x-6 pt-8">
      <div className="flex -space-x-3">
        <Avatar className="border-2 border-background w-16 h-16">
          <AvatarImage alt="" className="object-cover" src="/user-1.webp" />
          <AvatarFallback>M1</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-background w-16 h-16">
          <AvatarImage alt="" className="object-cover" src="/user-2.webp" />
          <AvatarFallback>M2</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-background w-16 h-16">
          <AvatarImage alt="" className="object-cover" src="/user-3.webp" />
          <AvatarFallback>M3</AvatarFallback>
        </Avatar>
        <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground border-2 border-background flex items-center justify-center font-bold">
          +K
        </div>
      </div>
      <div>
        <div className="font-bold text-lg">+2.500 profissionais</div>
        <div className="text-sm text-muted-foreground">cadastradas na plataforma</div>
      </div>
    </div>
  )
}
