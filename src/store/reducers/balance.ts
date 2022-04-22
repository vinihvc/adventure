import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FactoryTypeModel } from '@/models/factories'

import { add } from '@/store/thunks/balance'
import { amount, automatic, upgrade } from '@/store/thunks/factories'

const initialState = {
  total: 0,
  current: 0,
  factories: {
    potato: 0,
    land: 0,
    ore: 0,
    weapon: 0,
    medicine: 0,
  },
}

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {},
  extraReducers: {
    [add.fulfilled.type]: (
      state,
      action: PayloadAction<{ value: number; type: FactoryTypeModel }>,
    ) => {
      const { value, type } = action.payload

      state.total += value
      state.current += value
      state.factories[type] += value
    },
    [amount.fulfilled.type]: (
      state,
      action: PayloadAction<{ toDecrease: number }>,
    ) => {
      const { toDecrease } = action.payload

      state.current -= toDecrease
    },
    [automatic.fulfilled.type]: (
      state,
      action: PayloadAction<{ type: FactoryTypeModel; toDecrease: number }>,
    ) => {
      const { type, toDecrease } = action.payload

      state.current -= toDecrease
      state.factories[type] -= toDecrease
    },
    [upgrade.fulfilled.type]: (
      state,
      action: PayloadAction<{ type: FactoryTypeModel; toDecrease: number }>,
    ) => {
      const { type, toDecrease } = action.payload

      state.current -= toDecrease
      state.factories[type] -= toDecrease
    },
  },
})

export default balanceSlice.reducer
