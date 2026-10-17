import { HeroSection } from '@/components/sections/hero'
import { IconsSection } from '@/components/sections/icons'

export default function Home() {
  return (
    <main suppressHydrationWarning>
      <HeroSection />
      <IconsSection />
    </main>
  )
}
