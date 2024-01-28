import { Helmet } from 'react-helmet'
import { GameWrapper } from '../components/layout/game-wrapper'
import { Sidebar } from '../components/layout/sidebar'
import { GameBackground } from '../components/layout/game-background'
import { SettingDialog } from '../components/dialog/settings'

interface RootLayoutProps {
  children: React.ReactNode
}

export const RootLayout = (props: RootLayoutProps) => {
  const { children } = props

  return (
    <>
      <Helmet defaultTitle="$ 0" titleTemplate="%s // Adventure" />

      <GameBackground>
        <GameWrapper>
          <SettingDialog className="absolute top-4 right-4" />

          <Sidebar />

          {children}
        </GameWrapper>
      </GameBackground>
    </>
  )
}
