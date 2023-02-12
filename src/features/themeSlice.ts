import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLight: true,
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      state.isLight = !state.isLight
    },
  },
})

export default themeSlice.reducer
export const { changeTheme } = themeSlice.actions
