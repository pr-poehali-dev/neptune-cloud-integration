import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const privileges = [
  { name: "Pegas", price: 1000 },
  { name: "God", price: 900 },
  { name: "Helper", price: 850 },
  { name: "Dragon", price: 800 },
  { name: "Imperator", price: 750 },
  { name: "Magister", price: 550 },
  { name: "Overlord", price: 300 },
  { name: "Avenger", price: 250 },
  { name: "Titan", price: 150 },
  { name: "Hero", price: 50 },
]

export function FeaturesSection() {
  return (
    <section id="privileges" className="container max-w-screen-xl py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Привилегии сервера</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {privileges.map((priv) => (
          <PrivilegeCard key={priv.name} name={priv.name} price={priv.price} />
        ))}
      </div>
    </section>
  )
}

interface PrivilegeCardProps {
  name: string
  price: number
}

function PrivilegeCard({ name, price }: PrivilegeCardProps) {
  return (
    <Card className="bg-accent/50 border-border/60 hover:border-primary/50 transition-all">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-xl font-bold">{name}</span>
          <span className="text-2xl font-bold text-primary">{price} ₽</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button className="w-full" size="lg">
          <Icon name="ShoppingCart" className="mr-2" size={18} />
          Купить
        </Button>
      </CardContent>
    </Card>
  )
}