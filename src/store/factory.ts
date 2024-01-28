import { atom } from 'jotai'

export const factory = atom({
  default: {
    name: 'factory',
    cost: 100,
    value: 1,
    amount: 0,
    multiplier: 1.2,
    isUnlocked: false,
  },
})
