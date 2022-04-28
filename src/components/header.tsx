import { BalanceBar } from '@/components/balance-bar'
import { Settings } from '@/components/settings'

export const Header = () => {
  return (
    <header className="h-[60px] bg-gray-800 container flex justify-between items-center px-5">
      <div className="flex items-center space-x-5">
        <BalanceBar />
      </div>

      <Settings />
    </header>
  )
}
