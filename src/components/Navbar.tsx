import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-black/95 backdrop-blur">
      <div className="container flex h-14 max-w-screen-xl items-center">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-bold">ZoneWorld</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="#privileges" className="transition-colors hover:text-foreground/80">
              Привилегии
            </a>
            <a href="#additional" className="transition-colors hover:text-foreground/80">
              Доп.услуги
            </a>
            <a href="#contacts" className="transition-colors hover:text-foreground/80">
              Контакты
            </a>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://youtube.com/@zoneworld_minecraft?si=HLjWPyzbbFkMXp4z" target="_blank" rel="noopener noreferrer">
              <Icon name="Youtube" size={20} />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://vk.com/club235639665" target="_blank" rel="noopener noreferrer">
              <Icon name="MessageCircle" size={20} />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}