import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import themeReducer from "../features/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
