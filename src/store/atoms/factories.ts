import { FACTORIES, type FactoryType } from '@/content/factories'
import { decreaseMoney, hasMoneyToBuy, increaseMoney, store } from '@/store'
import { atom, useAtomValue } from 'jotai'
import { amountToBuy } from './msc'

const INITIAL_FACTORY = 'potato'

const initialFactories = Object.fromEntries(
  Object.keys(FACTORIES).map((factory) => [
    factory,
    {
      amount: factory === INITIAL_FACTORY ? 1 : 0,
      isProducing: false,
      isUpgraded: false,
      isAutomated: false,
      isUnlocked: factory === INITIAL_FACTORY,
      ...FACTORIES[factory as FactoryType],
    },
  ]),
)

export const factoriesAtom = atom(initialFactories)

export const useFactory = (factory: FactoryType) => {
  const factories = useAtomValue(factoriesAtom)

  return factories[factory]
}

/**
 * Get a factory from the store
 *
 * @param factory - The factory to get
 * @returns The factory
 */
export const getFactory = (factory: FactoryType) => {
  return store.get(factoriesAtom)[factory]
}

/**
 * Set the amount of a factory
 *
 * @param factory - The factory to set the amount of
 */
export const setAmountBySelectedAmount = (factory: FactoryType) => {
  const amountSelected = amountToBuy()
  const { buyCost } = getFactory(factory)

  const canBuy = hasMoneyToBuy(buyCost * amountSelected)

  if (!canBuy) return

  store.set(factoriesAtom, (prev) => ({
    ...prev,
    [factory]: {
      ...prev[factory],
      amount: prev[factory].amount + amountSelected,
    },
  }))

  decreaseMoney(buyCost * amountSelected)
}

/**
 * Start producing a factory
 *
 * @param factory - The factory to start producing
 */
export const startProducing = (factory: FactoryType) => {
  const { isAutomated, isProducing, isUnlocked } = getFactory(factory)

  if (isProducing || isAutomated || !isUnlocked) return

  store.set(factoriesAtom, (prev) => ({
    ...prev,
    [factory]: {
      ...prev[factory],
      isProducing: true,
    },
  }))
}

/**
 * Stop producing a factory
 *
 * @param factory - The factory to stop producing
 */
export const stopProducing = (factory: FactoryType) => {
  store.set(factoriesAtom, (prev) => ({
    ...prev,
    [factory]: {
      ...prev[factory],
      isProducing: false,
    },
  }))

  increaseMoney(factory)
}

/**
 * Enable automation for a factory
 *
 * @param factory - The factory to enable automation for
 */
export const autoFactory = (factory: FactoryType) => {
  const { isUnlocked, automatedCost } = getFactory(factory)

  const canAutomate = hasMoneyToBuy(automatedCost)

  if (!isUnlocked || !canAutomate) return

  store.set(factoriesAtom, (prev) => ({
    ...prev,
    [factory]: {
      ...prev[factory],
      isAutomated: true,
    },
  }))

  decreaseMoney(automatedCost)
}

/**
 * Upgrade a factory, generating more money per second
 *
 * @param factory - The factory to upgrade
 */
export const upgradeFactory = (factory: FactoryType) => {
  const { isUnlocked, upgradeCost } = getFactory(factory)

  const canUpgrade = hasMoneyToBuy(upgradeCost)

  if (!isUnlocked || !canUpgrade) return

  store.set(factoriesAtom, (prev) => ({
    ...prev,
    [factory]: {
      ...prev[factory],
      isUpgraded: true,
    },
  }))

  decreaseMoney(upgradeCost)
}

/**
 * Upgrade a factory to unlock
 *
 * @param factory - The factory to upgrade to unlock
 */
export const unlockFactory = (factory: FactoryType) => {
  const { unlockPrice } = getFactory(factory)

  const canUnlock = hasMoneyToBuy(unlockPrice)

  if (!canUnlock) return

  store.set(factoriesAtom, (prev) => ({
    ...prev,
    [factory]: {
      ...prev[factory],
      isUnlocked: true,
      amount: 1,
    },
  }))

  decreaseMoney(unlockPrice)
}

/**
 * Get the total amount of money a factory will earn after producing
 *
 * @param factory - The factory to get the total amount of money for
 * @returns The total amount of money a factory will earn after producing
 */
export const totalToEarnAfterProduce = (factory: FactoryType) => {
  const { amount, productionValue, isUpgraded } = getFactory(factory)

  return (amount || 1) * productionValue * (isUpgraded ? 2 : 1)
}
