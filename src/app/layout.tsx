import { Helmet } from 'react-helmet'
import { GameForeground } from '../components/layout/game/foreground'
import { Sidebar } from '../components/layout/sidebar'
import { GameBackground } from '../components/layout/game/background'
import { SettingDialog } from '../components/dialog/settings'
import { AmountToBuy } from '../components/layout/amount'

interface RootLayoutProps {
  children: React.ReactNode
}

export const RootLayout = (props: RootLayoutProps) => {
  const { children } = props

  return (
    <>
      <Helmet defaultTitle="$ 0" titleTemplate="%s // Adventure" />

      <GameBackground>
        <GameForeground className="gap-5">
          <Sidebar />

          {children}

          <div className="absolute top-4 right-4">
            <AmountToBuy />

            <SettingDialog />
          </div>
        </GameForeground>
      </GameBackground>
    </>
  )
}
