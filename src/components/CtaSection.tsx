import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const additionalServices = [
  { name: "Разбан", price: 400, icon: "Unlock" },
  { name: "Размут", price: 150, icon: "Volume2" },
]

export function CtaSection() {
  return (
    <section id="additional" className="container max-w-screen-xl py-24">
      <h2 className="text-3xl font-bold text-center mb-12">Дополнительные услуги</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
        {additionalServices.map((service) => (
          <Card key={service.name} className="bg-accent/50 border-border/60 hover:border-primary/50 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-3">
                  <Icon name={service.icon as any} size={24} className="text-primary" />
                  <span className="text-xl font-bold">{service.name}</span>
                </span>
                <span className="text-2xl font-bold text-primary">{service.price} ₽</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full" size="lg">
                <Icon name="ShoppingCart" className="mr-2" size={18} />
                Купить
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div id="contacts" className="text-center pt-8 border-t border-border/40">
        <h3 className="text-2xl font-bold mb-6">Наши социальные сети</h3>
        <div className="flex justify-center gap-4">
          <Button size="lg" variant="outline" className="px-8" asChild>
            <a href="https://youtube.com/@zoneworld_minecraft?si=HLjWPyzbbFkMXp4z" target="_blank" rel="noopener noreferrer">
              <Icon name="Youtube" className="mr-2" size={20} />
              YouTube канал
            </a>
          </Button>
          <Button size="lg" variant="outline" className="px-8" asChild>
            <a href="https://vk.com/club235639665" target="_blank" rel="noopener noreferrer">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              ВК сообщество
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}