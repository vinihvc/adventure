import { Helmet } from 'react-helmet'

import { RootLayout } from './layout'
import { FACTORIES } from '../config/factories'
import { Factory } from '../components/factory'

import useSound from 'use-sound'

import theme from '@/assets/sfx/theme.wav'
import React from 'react'

export const HomePage = () => {
  const [play] = useSound(theme, { soundEnabled: true })

  React.useEffect(() => {
    play()
  }, [])

  return (
    <>
      <Helmet title={`$ ${new Intl.NumberFormat().format(1)}`} />

      <RootLayout>
        <div className="w-full items-center flex">
          <div className="grid grid-cols-2 gap-10">
            {Object.keys(FACTORIES).map((factory: any) => (
              <Factory key={factory} type={factory} />
            ))}
          </div>
        </div>
      </RootLayout>
    </>
  )
}
