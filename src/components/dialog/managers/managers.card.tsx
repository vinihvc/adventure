import type { FactoryType } from '@/content/factories'
import { hasMoneyToBuy } from '@/store'
import { autoFactory, useFactory } from '@/store/atoms/factories'
import { amountFormatter } from '@/utils/formatters'
import { Check } from 'lucide-react'
import { UpgradeCard, UpgradeCardTrigger } from '../../ui/upgrade-card'

type ManagersCardProps = {
  /**
   * The factory type
   */
  factoryType: FactoryType
}

export const ManagersCard = (props: ManagersCardProps) => {
  const { factoryType } = props

  const { isUnlocked, isAutomated, automatedCost } = useFactory(factoryType)

  const canBuy = hasMoneyToBuy(automatedCost)

  const getText = () => {
    if (!isUnlocked) return 'Unlock first'
    if (isAutomated) return <Check />
    if (!canBuy) return `Research (${amountFormatter(automatedCost)})`
    return 'Research'
  }

  return (
    <UpgradeCard
      type="manager"
      factoryType={factoryType}
      image={`/images/managers/${factoryType}.webp`}
      isEnabled={isAutomated}
    >
      <UpgradeCardTrigger
        disabled={!isUnlocked || isAutomated || !canBuy}
        onClick={() => autoFactory(factoryType)}
      >
        {getText()}
      </UpgradeCardTrigger>
    </UpgradeCard>
  )
}
