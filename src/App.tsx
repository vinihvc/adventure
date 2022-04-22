import { Helmet } from 'react-helmet'

import { useAppSelector } from '@/hooks/use-redux'

import { GameWrapper } from '@/components/game-wrapper'
import { Factory } from '@/components/factory'
import { Sidebar } from '@/components/sidebar'
import { useEffect } from 'react'

// import theme from '@/assets/sfx/theme.wav'

export const App = () => {
  const { factories, balance } = useAppSelector((state) => state)

  // const audio = new Audio(theme)

  return (
    <>
      <Helmet title={`$ ${new Intl.NumberFormat().format(balance.current)}`} />

      <GameWrapper>
        <Sidebar />

        <div>
          <h2 className="text-5xl text-center font-black">
            ${new Intl.NumberFormat().format(balance.current)}
          </h2>

          <div className="grid grid-cols-1 gap-5 mt-10">
            {factories.map((factory: any) => (
              <Factory key={factory.type} type={factory.type} />
            ))}
          </div>
        </div>
      </GameWrapper>
    </>
  )
}
