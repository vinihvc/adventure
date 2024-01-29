import { atomWithStorage } from 'jotai/utils'

export const walletAtom = atomWithStorage('wallet', {
  money: 0,
})
