import { baseApi } from "../app/baseApi"
import { logIn } from "../features/authSlice"

//
//// register
//
interface IRegisterPayload {
  name: string
  email: string
  password: string
}

interface IRegisterResponse {
  accessToken: string
}

//
//// login
//
interface ILoginPayload {
  email: string
  password: string
}

interface ILoginResponse {
  accessToken: string
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<IRegisterResponse, IRegisterPayload>({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          // localStorage.setItem("auth", JSON.stringify(result.data))
          dispatch(logIn(result.data))
        } catch (error) {
          console.log("Registration failed: ", error)
        }
      },
    }),

    login: builder.mutation<ILoginResponse, ILoginPayload>({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          // localStorage.setItem("auth", JSON.stringify(result.data))
          dispatch(logIn(result.data))
        } catch (error) {
          console.log("Login failed: ", error)
        }
      },
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation } = authApi
