import { FactoryTypeModel } from '@/models/factory'

import { factoriesThunk } from '@/store/thunks/factories'

import { useAppDispatch, useAppSelector } from '@/hooks/use-redux'
import { useAppSound } from '@/hooks/use-sound'

import { UPGRADES } from '@/constants/upgrades'

import { buyAmountCalculator } from '@/utils/buy-amount-caculator'

import coinSfx from '@/assets/sfx/coin.wav'

/**
 * Custom hook to manager factory on redux store
 */
export const useFactory = (type: FactoryTypeModel) => {
  const dispatch = useAppDispatch()

  const { factories, balance } = useAppSelector((state) => state)

  const { play } = useAppSound(coinSfx)

  const factory = factories.find((f) => f.type === type)!

  const canBuyAmount = buyAmountCalculator(factory) > balance.current.cash

  // TODO: create helper to find upgrade by type
  const upgradeType = 'super'

  const upgradePrice = UPGRADES[upgradeType][type]

  const canBuyUpgrade = balance.current.cash >= upgradePrice

  const amountGenerated = factory.amount * factory.value * factory.multiplier

  const handleBuyAmount = () => {
    dispatch(factoriesThunk.amount(factory))

    play()
  }

  return {
    factory,
    canBuyAmount,
    canBuyUpgrade,
    upgradePrice,
    amountGenerated,
    handleBuyAmount,
  }
}
