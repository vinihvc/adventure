import { TailwindIndicator } from '@/components/debug/tailwind-indicator'
import { Background } from '@/components/layout/background'
import { Footer } from '@/components/layout/footer'
import { Game } from '@/components/layout/game'
import { Header } from '@/components/layout/header'
import { Navigation } from '@/components/layout/navigation'
import { FactoryCard } from '@/components/ui/factory-card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { FACTORIES, type FactoryType } from '@/content/factories'
import { useContextMenu } from '@/hooks/use-context-menu'
import { Providers } from './providers'

export const HomePage = () => {
  useContextMenu()

  return (
    <Providers>
      <Background />

      <Game>
        <Header />

        <ScrollArea className="flex-1">
          <div className="grid w-full gap-6 p-4 md:grid-cols-2">
            {Object.keys(FACTORIES).map((factory) => (
              <FactoryCard key={factory} type={factory as FactoryType} />
            ))}
          </div>
        </ScrollArea>
      </Game>

      <Footer />

      <Navigation className="fixed inset-x-0 bottom-0 h-14 w-full border-background/20 border-t bg-foreground/80 px-2 backdrop-blur-lg sm:hidden [&>button]:size-full [&>button]:hover:bg-foreground/90" />

      <TailwindIndicator />
    </Providers>
  )
}
