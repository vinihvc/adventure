import { atomWithStorage } from 'jotai/utils'

type MscAtom = {
  amountToBuy: 1 | '10%' | '50%' | 'max'
}

export const mscAtom = atomWithStorage<MscAtom>('msc', {
  amountToBuy: 1,
})
