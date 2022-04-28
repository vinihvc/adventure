import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  music: true,
  sfx: true,
}

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    toggleMusic: (state) => {
      state.music = !state.music
    },
    toggleSfx: (state) => {
      state.sfx = !state.sfx
    },
  },
})

export const { toggleMusic, toggleSfx } = settingSlice.actions

export default settingSlice.reducer
