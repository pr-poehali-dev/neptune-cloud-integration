import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export function HeroSection() {
  return (
    <section className="container max-w-screen-xl py-20 text-center">
      <div className="flex justify-center mb-6">
        <Badge variant="outline" className="px-4 py-1 text-sm rounded-full border-neutral-700">
          Minecraft сервер
        </Badge>
      </div>
      <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl mb-6">
        Добро пожаловать на
        <br />
        ZoneWorld
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
        Приветствую! Ты попал на сайт сервера ZoneWorld. Тут ты сможешь купить привилегии для сервера и играть с ними. После покупки ты автоматически получишь привилегию на сервере. Спасибо за прочтение!
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="px-8" asChild>
          <a href="https://youtube.com/@zoneworld_minecraft?si=HLjWPyzbbFkMXp4z" target="_blank" rel="noopener noreferrer">
            <Icon name="Youtube" className="mr-2" size={20} />
            YouTube
          </a>
        </Button>
        <Button size="lg" variant="outline" className="px-8" asChild>
          <a href="https://vk.com/club235639665" target="_blank" rel="noopener noreferrer">
            <Icon name="MessageCircle" className="mr-2" size={20} />
            ВКонтакте
          </a>
        </Button>
      </div>
    </section>
  )
}