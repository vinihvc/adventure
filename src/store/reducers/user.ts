import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rank: 1,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export default userSlice.reducer
