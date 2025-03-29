import { FACTORIES, type FactoryType } from '@/content/factories'
import { atom, useAtomValue } from 'jotai'
import { store } from '..'
import { factoriesAtom } from './factories'

const initialStatistics = Object.fromEntries(
  Object.keys(FACTORIES).map((factory) => [
    factory,
    { quantity: 0, moneySpent: 0, moneyEarned: 0 },
  ]),
)

export const statisticsAtom = atom({
  moneyEarned: 0,
  moneySpent: 0,
  factories: initialStatistics,
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
