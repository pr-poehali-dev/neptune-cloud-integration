import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"
import { useEffect, useState } from "react"

export function StatsSection() {
  const [onlinePlayers, setOnlinePlayers] = useState(0)

  useEffect(() => {
    const randomPlayers = Math.floor(Math.random() * 150) + 50
    setOnlinePlayers(randomPlayers)
  }, [])

  return (
    <section className="container max-w-screen-xl py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-accent/50 border-border/60">
          <CardContent className="flex flex-col items-center justify-center py-8">
            <Icon name="Users" size={48} className="text-primary mb-4" />
            <div className="text-4xl font-bold mb-2">{onlinePlayers}</div>
            <div className="text-muted-foreground">Игроков онлайн</div>
          </CardContent>
        </Card>

        <Card className="bg-accent/50 border-border/60">
          <CardContent className="flex flex-col items-center justify-center py-8">
            <Icon name="Crown" size={48} className="text-primary mb-4" />
            <div className="text-4xl font-bold mb-2">10</div>
            <div className="text-muted-foreground">Привилегий</div>
          </CardContent>
        </Card>

        <Card className="bg-accent/50 border-border/60">
          <CardContent className="flex flex-col items-center justify-center py-8">
            <Icon name="Globe" size={48} className="text-primary mb-4" />
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-muted-foreground">Сервер онлайн</div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
