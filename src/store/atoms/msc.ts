import { useAtomValue } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { store } from '..'

export type MscAtomProps = {
  amountToBuy: 1 | 10 | 50
}

export const mscAtom = atomWithStorage<MscAtomProps>('msc', {
  amountToBuy: 1,
})

export const useMsc = () => useAtomValue(mscAtom)

export const toggleAmountToBuy = () => {
  store.set(mscAtom, (prev) => ({
    amountToBuy: prev.amountToBuy === 1 ? 10 : prev.amountToBuy === 10 ? 50 : 1,
  }))
}

export const amountToBuy = () => {
  const { amountToBuy } = store.get(mscAtom)

  return amountToBuy
}
