import { TailwindIndicator } from '@/components/debug/tailwind-indicator'
import { Background } from '@/components/layout/background'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Navigation } from '@/components/layout/navigation'
import { Factory } from '@/components/ui/factory'
import { FACTORIES, type FactoryType } from '@/data/factories'
import { useContextMenu } from '@/hooks/use-context-menu'
import { store } from '@/store'
import { Provider as JotaiProvider } from 'jotai'
import React from 'react'

const DailyGiftDialog = React.lazy(
  () => import('@/components/dialog/daily-gift'),
)
const WelcomeDialog = React.lazy(() => import('@/components/dialog/welcome'))

export const HomePage = () => {
  useContextMenu()

  return (
    <JotaiProvider store={store}>
      <Background />

      <div className="container relative max-w-6xl border-2 bg-background pb-16">
        <Header />

        <div className="flex w-full items-center">
          <div className="grid w-full gap-5 p-2 md:grid-cols-2 md:p-5">
            {Object.keys(FACTORIES).map((factory) => (
              <Factory key={factory} type={factory as FactoryType} />
            ))}
          </div>
        </div>
      </div>

      <DailyGiftDialog />

      <WelcomeDialog />

      <Footer />

      <Navigation className="fixed inset-x-0 bottom-0 h-14 border-neutral-700 border-t bg-foreground sm:hidden" />

      <TailwindIndicator />
    </JotaiProvider>
  )
}
