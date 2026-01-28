import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Icon from "@/components/ui/icon"
import { useState } from "react"

interface Complaint {
  id: number
  playerName: string
  accused: string
  reason: string
  date: string
}

export function ForumSection() {
  const [complaints, setComplaints] = useState<Complaint[]>([
    {
      id: 1,
      playerName: "Steve123",
      accused: "Creeper_King",
      reason: "Использование читов в PvP",
      date: "27.01.2026"
    },
    {
      id: 2,
      playerName: "DiamondMiner",
      accused: "GrieferPro",
      reason: "Гриферство базы",
      date: "26.01.2026"
    }
  ])

  const [formData, setFormData] = useState({
    playerName: "",
    accused: "",
    reason: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.playerName || !formData.accused || !formData.reason) return

    const newComplaint: Complaint = {
      id: Date.now(),
      ...formData,
      date: new Date().toLocaleDateString('ru-RU')
    }

    setComplaints([newComplaint, ...complaints])
    setFormData({ playerName: "", accused: "", reason: "" })
  }

  return (
    <section id="forum" className="container max-w-screen-xl py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Форум жалоб</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Card className="bg-accent/50 border-border/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="AlertTriangle" size={24} className="text-primary" />
                Подать жалобу
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваш никнейм</label>
                  <Input
                    placeholder="Steve123"
                    value={formData.playerName}
                    onChange={(e) => setFormData({ ...formData, playerName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">На кого жалоба</label>
                  <Input
                    placeholder="Нарушитель_666"
                    value={formData.accused}
                    onChange={(e) => setFormData({ ...formData, accused: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Причина жалобы</label>
                  <Textarea
                    placeholder="Опишите подробно что произошло..."
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" className="mr-2" size={18} />
                  Отправить жалобу
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Последние жалобы</h3>
          <div className="space-y-4">
            {complaints.map((complaint) => (
              <Card key={complaint.id} className="bg-accent/30 border-border/40">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-semibold">{complaint.playerName}</div>
                      <div className="text-sm text-muted-foreground">
                        Жалоба на: <span className="text-red-400">{complaint.accused}</span>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">{complaint.date}</div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{complaint.reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
