import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userCardIds: [], // To store the user's card IDs
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserCardIds: (state, action) => {
      state.userCardIds = action.payload; // Store the card IDs
    },
  },
});

export const { setUserCardIds } = authSlice.actions;
export default authSlice.reducer;
