import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  music: true,
  sfx: true,
}

const settingsSlice = createSlice({
  name: 'settings',
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

export const { toggleMusic, toggleSfx } = settingsSlice.actions

export default settingsSlice.reducer
