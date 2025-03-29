import { Soundtrack } from '@/components/sound/soundtrack'
import { SoundProvider } from '@/components/ui/sound'
import { store } from '@/store'
import { Provider as JotaiProvider } from 'jotai'

export const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <SoundProvider>
      <JotaiProvider store={store}>
        {children}

        <Soundtrack />
      </JotaiProvider>
    </SoundProvider>
  )
}
