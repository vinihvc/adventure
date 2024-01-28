import { Helmet } from 'react-helmet'

import { RootLayout } from './layout'
import { FACTORIES } from '../config/factories'
import { Factory } from '../components/factory'

// import theme from '@/assets/sfx/theme.wav'

export const HomePage = () => {
  return (
    <>
      <Helmet title={`$ ${new Intl.NumberFormat().format(1)}`} />

      <RootLayout>
        <div className="grid grid-cols-1 gap-5 mt-10">
          {FACTORIES.map((factory: any) => (
            <Factory key={factory.type} factory={factory} />
          ))}
        </div>
      </RootLayout>
    </>
  )
}
