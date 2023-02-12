import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import themeReducer from "../features/themeSlice"

import { persistReducer } from "redux-persist"
import authSlice from "../features/authSlice"
import conversationsSlice from "../features/conversationsSlice"
import messagesSlice from "../features/messagesSlice"
const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    theme: themeReducer,
    auth: authSlice,
  })
)

const rootReducer = combineReducers({
  messages: messagesSlice,
  conversations: conversationsSlice,
})

export const store = configureStore({
  reducer: {
    root: rootReducer,
    persisted: persistedReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
