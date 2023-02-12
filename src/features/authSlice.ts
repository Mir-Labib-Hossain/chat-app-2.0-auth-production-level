import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  accessToken: "",
  user: {
    email: "",
    name: "",
    id: null,
  },
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.accessToken = action.payload.accessToken
      state.user = action.payload.user
    },

    logOut: (state) => {
      state = initialState
    },
  },
})

export const { logIn, logOut } = authSlice.actions
export default authSlice.reducer
