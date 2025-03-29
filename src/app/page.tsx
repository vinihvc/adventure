import { TailwindIndicator } from '@/components/debug/tailwind-indicator'
import { Background } from '@/components/layout/background'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Navigation } from '@/components/layout/navigation'
import { FactoryCard } from '@/components/ui/factory-card'
import { FACTORIES, type FactoryType } from '@/content/factories'
import { useContextMenu } from '@/hooks/use-context-menu'
import { Providers } from './providers'

export const HomePage = () => {
  useContextMenu()

  return (
    <Providers>
      <Background />

      <div className="container relative max-w-5xl border backdrop-blur-xs max-sm:flex-1 max-sm:pb-16 sm:rounded-xl sm:bg-background/40 sm:backdrop-blur-md">
        <Header />

        <div className="flex w-full items-center">
          <div className="grid w-full gap-2 p-2 md:grid-cols-2 md:p-5">
            {Object.keys(FACTORIES).map((factory) => (
              <FactoryCard key={factory} type={factory as FactoryType} />
            ))}
          </div>
        </div>
      </div>

      <Footer />

      <Navigation className="fixed inset-x-0 bottom-0 h-14 border-t bg-background/80 px-2 backdrop-blur-lg sm:hidden" />

      <TailwindIndicator />
    </Providers>
  )
}
