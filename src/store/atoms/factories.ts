import { FACTORIES, type FactoryType } from '@/data/factories'
import { atom, useAtomValue } from 'jotai'

import { store } from '@/store'
import { mscAtom } from './msc'

export const factoriesAtom = atom({
  potato: {
    amount: 1,
    isProducing: false,
    isAuto: false,
    isUnlocked: true,
  },
  peasant: {
    amount: 0,
    isProducing: false,
    isAuto: false,
    isUnlocked: false,
  },
  knight: {
    amount: 0,
    isProducing: false,
    isAuto: false,
    isUnlocked: false,
  },
  archer: {
    amount: 0,
    isProducing: false,
    isAuto: false,
    isUnlocked: false,
  },
  engineer: {
    amount: 0,
    isProducing: false,
    isAuto: false,
    isUnlocked: false,
  },
  mage: {
    amount: 0,
    isProducing: false,
    isAuto: false,
    isUnlocked: false,
  },
})

export const useFactory = (factory: FactoryType) => {
  const factories = useAtomValue(factoriesAtom)

  return {
    ...FACTORIES[factory],
    ...factories[factory],
  }
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

export const setProducing = (factory: FactoryType, isProducing: boolean) => {
  store.set(factoriesAtom, (prev) => ({
    ...prev,
    [factory]: {
      ...prev[factory],
      isProducing,
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
