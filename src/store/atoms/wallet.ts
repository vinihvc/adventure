import { FACTORIES, type FactoryType } from '@/content/factories'
import { atom, useAtomValue } from 'jotai'
import { store } from '..'
import { factoriesAtom } from './factories'

const walletAtom = atom({
  money: 0,
})

export const useWallet = () => useAtomValue(walletAtom)

export const setMoney = (factory: FactoryType) => {
  const f = { ...FACTORIES[factory], ...store.get(factoriesAtom)[factory] }

  store.set(walletAtom, (prev) => ({
    ...prev,
    money: prev.money + f.amount * f.value,
  }))
}

export const decreaseMoney = (amount: number) => {
  store.set(walletAtom, (prev) => ({
    ...prev,
    money: prev.money - amount,
  }))
}
