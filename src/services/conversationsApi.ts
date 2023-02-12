import { baseApi } from "../app/baseApi"

export const conversationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: (email) =>
        `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=${process.env.CONVERSATION_PER_PAGE}`,
    }),
  }),
})

export const { useGetConversationsQuery } = conversationsApi
