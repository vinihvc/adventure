import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FactoryModel } from '@/models/factories'

import { automatic, amount, upgrade } from '@/store/thunks/factories'

import potato from '@/assets/img/potato.png'
import land from '@/assets/img/land.png'
import ore from '@/assets/img/ore.png'
import weapon from '@/assets/img/weapon.png'
import medicine from '@/assets/img/medicine.png'

const initialState: FactoryModel[] = [
  {
    type: 'potato',
    duration: 2,
    value: 6,
    amount: 1,
    amountCost: 6,
    auto: false,
    autoCost: 60,
    upgrade: false,
    upgradeCost: 6_000,
    upgradeValue: 1,
    image: potato,
  },
  {
    type: 'land',
    duration: 4,
    value: 12,
    amount: 1,
    amountCost: 12,
    auto: false,
    autoCost: 120,
    upgrade: false,
    upgradeCost: 12_000,
    upgradeValue: 1,
    image: land,
  },
  {
    type: 'ore',
    duration: 6,
    value: 24,
    amount: 1,
    amountCost: 24,
    auto: false,
    autoCost: 240,
    upgrade: false,
    upgradeCost: 24_000,
    upgradeValue: 1,
    image: ore,
  },
  {
    type: 'weapon',
    duration: 8,
    value: 32,
    amount: 1,
    amountCost: 32,
    auto: false,
    autoCost: 320,
    upgrade: false,
    upgradeCost: 32_000,
    upgradeValue: 1,
    image: weapon,
  },
  {
    type: 'medicine',
    duration: 9,
    value: 40,
    amount: 1,
    amountCost: 40,
    auto: false,
    autoCost: 400,
    upgrade: false,
    upgradeCost: 40_000,
    upgradeValue: 1,
    image: medicine,
  },
]

const factoriesSlice = createSlice({
  name: 'factories',
  initialState,
  reducers: {},
  extraReducers: {
    [amount.fulfilled.type]: (
      state,
      action: PayloadAction<{ type: FactoryModel; amount: number }>,
    ) => {
      const { type, amount } = action.payload

      const factory = state.find((f: any) => f.type === type)

      if (factory) {
        factory.amount += amount
      }
    },
    [automatic.fulfilled.type]: (
      state,
      action: PayloadAction<FactoryModel>,
    ) => {
      const factory = state.find((f: any) => f.type === action.payload)

      if (factory) {
        factory.auto = true
      }
    },
    [upgrade.fulfilled.type]: (state, action: PayloadAction<FactoryModel>) => {
      const factory = state.find((f: any) => f.type === action.payload)

      if (factory) {
        factory.upgrade = true
        factory.upgradeValue = 3
      }
    },
  },
})

export default factoriesSlice.reducer
