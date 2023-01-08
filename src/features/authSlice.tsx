import { createSlice } from "@reduxjs/toolkit"

interface IInitialState {
  accessToken: null | number
}

const initialState: IInitialState = {
  accessToken: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.accessToken = 12345
    },
    logout: (state) => {
      state.accessToken = null
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
