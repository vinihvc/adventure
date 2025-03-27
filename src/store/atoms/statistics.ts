import { store } from '..'
import { type FactoryType, FACTORIES } from '@/data/factories'
import { atom, useAtomValue } from 'jotai'
import { factoriesAtom } from './factories'

export const statisticsAtom = atom({
  moneyEarned: 0,
  moneySpent: 0,
  factories: {
    potato: {
      quantity: 0,
      moneySpent: 0,
      moneyEarned: 0,
    },
    peasant: {
      quantity: 0,
      moneySpent: 0,
      moneyEarned: 0,
    },
    knight: {
      quantity: 0,
      moneySpent: 0,
      moneyEarned: 0,
    },
    archer: {
      quantity: 0,
      moneySpent: 0,
      moneyEarned: 0,
    },
    engineer: {
      quantity: 0,
      moneySpent: 0,
      moneyEarned: 0,
    },
    mage: {
      quantity: 0,
      moneySpent: 0,
      moneyEarned: 0,
    },
  },
})

export const useStatistics = () => useAtomValue(statisticsAtom)

export const setStatistics = (factory: FactoryType) => {
  const f = { ...FACTORIES[factory], ...store.get(factoriesAtom)[factory] }

  store.set(statisticsAtom, (prev) => ({
    ...prev,
    moneyEarned: prev.moneyEarned + f.amount * f.value,
    factories: {
      ...prev.factories,
      [factory]: {
        ...prev.factories[factory],
        moneyEarned: prev.factories[factory].moneyEarned + f.amount * f.value,
      },
    },
  }))
}
