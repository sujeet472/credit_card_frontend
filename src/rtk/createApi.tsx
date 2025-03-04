import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const account_transactions_Api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchAccountTransaction: builder.query({
      query: (id) => `account_transactions/${id}`,
    }),
    createAccountTransaction: builder.mutation({
      query: (account_transactions) => ({
        url: "account_transaction",
        method: "POST",
        body: account_transactions,
      }),
    }),
    fetchUserCards: builder.query<void, void>({
      query: () => 'frontend_user_cards',
    }),
  }),
});

export const { 
  useFetchAccountTransactionQuery, 
  useCreateAccountTransactionMutation,
  useFetchUserCardsQuery,
} = account_transactions_Api;











// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const account_transactions_Api = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/" }),
//   endpoints: (builder) => ({
//     fetchAccountTransaction: builder.query({
//       query: (id) => `account_transactions/${id}`,
//     }),
//     createAccountTransaction: builder.mutation({
//       query: (account_transactions) => ({
//         url: "account_transaction",
//         method: "POST",
//         body: account_transactions,
//       }),
//     }),
//     fetchUserCards: builder.query<void, void>({
//       query: () => 'frontend_user_cards',
//     }),
//   }),
// });

// export const 
// { useFetchAccountTransactionQuery, 
//   useCreateAccountTransactionMutation,
//   useFetchUserCardsQuery,}
//  = account_transactions_Api;