import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { StatsSection } from "@/components/StatsSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { ForumSection } from "@/components/ForumSection"
import { FaqSection } from "@/components/FaqSection"
import { CtaSection } from "@/components/CtaSection"

const Index = () => {
  return (
    <div className="dark bg-black text-white min-h-screen">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <ForumSection />
        <FaqSection />
        <CtaSection />
      </main>
    </div>
  )
}

export default Index