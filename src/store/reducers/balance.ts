import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FactoryTypeModel } from '@/models/factory'

import { balanceThunk } from '@/store/thunks/balance'
import { factoriesThunk } from '@/store/thunks/factories'

const initialState = {
  total: {
    cash: 0,
    potato: 0,
    land: 0,
    bacon: 0,
    assassin: 0,
    medicine: 0,
    rocket: 0,
    planet: 0,
    galaxy: 0,
    sorcery: 0,
    timeTravel: 0,
    angel: 0,
    magic: 0,
    reset: 0,

    // ...Object.keys(FACTORIES).reduce((acc, cur) => {
    //   acc[cur] = 0
    //   return acc
    // }, {}),
  },
  current: {
    cash: 0,
    potato: 0,
    land: 0,
    bacon: 0,
    assassin: 0,
    medicine: 0,
    rocket: 0,
    planet: 0,
    galaxy: 0,
    sorcery: 0,
    timeTravel: 0,
    angel: 0,
    magic: 0,
    reset: 0,
  },
}

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {},
  extraReducers: {
    [balanceThunk.add.fulfilled.type]: (
      state,
      action: PayloadAction<{ type: FactoryTypeModel; value: number }>,
    ) => {
      const { value, type } = action.payload

      state.total.cash += value
      state.current.cash += value
      state.total[type] += value
    },
    [factoriesThunk.amount.fulfilled.type]: (
      state,
      action: PayloadAction<{ toDecrease: number }>,
    ) => {
      const { toDecrease } = action.payload

      state.current.cash -= toDecrease
    },
    [factoriesThunk.automatic.fulfilled.type]: (
      state,
      action: PayloadAction<{ toDecrease: number }>,
    ) => {
      const { toDecrease } = action.payload

      state.current.cash -= toDecrease
    },
    [factoriesThunk.upgrade.fulfilled.type]: (
      state,
      action: PayloadAction<{ toDecrease: number }>,
    ) => {
      const { toDecrease } = action.payload

      state.current.cash -= toDecrease
    },
  },
})

export default balanceSlice.reducer
