import { FACTORIES, type FactoryType } from '@/content/factories'
import { atom, useAtomValue } from 'jotai'

import { sound } from '@/components/ui/sound'
import { store } from '@/store'
import { mscAtom } from './msc'

const initialFactories = Object.fromEntries(
  Object.keys(FACTORIES).map((factory) => [
    factory,
    {
      amount: factory === 'potato' ? 1 : 0,
      isProducing: false,
      isAuto: false,
      isUnlocked: factory === 'potato',
      ...FACTORIES[factory as FactoryType],
    },
  ]),
)

export const factoriesAtom = atom(initialFactories)

export const useFactory = (factory: FactoryType) => {
  const factories = useAtomValue(factoriesAtom)

  return factories[factory]
}

export const getFactory = (factory: FactoryType) => {
  const factories = store.get(factoriesAtom)

  return factories[factory]
}

export const setAmount = (factory: FactoryType) => {
  store.set(factoriesAtom, (prev) => ({
    ...prev,
    [factory]: {
      ...prev[factory],
      amount: prev[factory].amount + store.get(mscAtom).amountToBuy,
    },
  }))
}

export const getAmount = (factory: FactoryType) => {
  const factories = store.get(factoriesAtom)

  return factories[factory].amount
}

export const startProducing = (factory: FactoryType) => {
  const { isAuto, isProducing, isUnlocked } = store.get(factoriesAtom)[factory]

  if (isProducing || isAuto || !isUnlocked) return

  sound.play('click')

  store.set(factoriesAtom, (prev) => ({
    ...prev,
    [factory]: {
      ...prev[factory],
      isProducing: true,
    },
  }))
}

export const stopProducing = (factory: FactoryType) => {
  store.set(factoriesAtom, (prev) => ({
    ...prev,
    [factory]: {
      ...prev[factory],
      isProducing: false,
    },
  }))
}

export const isUnlocked = (factory: FactoryType) => {
  const isUnlocked = store.get(factoriesAtom)[factory].isUnlocked

  if (!isUnlocked) return

  return isUnlocked
}

export const upgradeAuto = (factory: FactoryType) => {
  const isUnlocked = store.get(factoriesAtom)[factory].isUnlocked

  if (!isUnlocked) return

  store.set(factoriesAtom, (prev) => ({
    ...prev,
    [factory]: {
      ...prev[factory],
      isAuto: true,
    },
  }))
}

export const upgradeUnlock = (factory: FactoryType) => {
  store.set(factoriesAtom, (prev) => ({
    ...prev,
    [factory]: {
      ...prev[factory],
      isUnlocked: true,
    },
  }))
}
