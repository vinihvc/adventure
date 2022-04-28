import { Helmet } from 'react-helmet'

import { useAppSelector } from '@/hooks/use-redux'

import { GameWrapper } from '@/components/game-wrapper'
import { Factory } from '@/components/factory'
import { Sidebar } from '@/components/sidebar'
import { TotalAmount } from '@/components/total-amount'

export const App = () => {
  const { factories, balance } = useAppSelector((state) => state)

  // const audio = new Audio(theme)

  return (
    <>
      <Helmet
        title={`$ ${new Intl.NumberFormat().format(balance.current.cash)}`}
      />

      <GameWrapper>
        <Sidebar className="hidden md:flex" />

        <section className="mt-5 p-4 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {factories.map((factory: any) => (
              <Factory
                key={factory.type}
                type={factory.type}
                name={factory.name}
              />
            ))}
          </div>
        </section>

        <TotalAmount className="absolute top-5 right-5" />
      </GameWrapper>
    </>
  )
}
