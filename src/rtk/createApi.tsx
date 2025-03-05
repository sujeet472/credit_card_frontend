import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


interface UserCardData {
  id: string;
  credit_card_id: string;
  profile_id: string;
  issue_date: string;
  expiry_date: string;
  available_limit: string; // API returns it as string
  hashed_cvv: string;
  is_active: boolean;
}

interface UserCardsResponse {
  user_cards: UserCardData[];
}

interface UserProfile {
  id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  email: string;
  phone_number: string;
  address: string;
  profile_image?: string;
  branch_id: string;
  account_type: string;
  users_id: string;
}



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
      query: (account_transaction_data) => ({
        url: "frontend_account_transactions",
        method: "POST",
        body: account_transaction_data,
      }),
    }),


    fetchUserCards: builder.query<UserCardsResponse, void>({
      query: () => 'frontend_user_cards',
    }),

    fetchAccountTransactions: builder.query<void, void>({
      query: () => `frontend_account_transactions`,
    }),

    fetchUserProfile: builder.query<UserProfile, void>({
      query: () => "frontend_profile", // Matches GET /api/v1/profile
    }),

    updateUserProfile: builder.mutation({
      query: (profileData) => ({
        url: "frontend_profile", // Matches PATCH /api/v1/profile
        method: "PATCH",
        body: { profile: profileData }
      }),
    }),

  }),
});

export const {
  useFetchAccountTransactionQuery,
  useFetchAccountTransactionsQuery,
  useCreateAccountTransactionMutation,
  useFetchUserCardsQuery,
  useFetchUserProfileQuery,
  useUpdateUserProfileMutation,
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