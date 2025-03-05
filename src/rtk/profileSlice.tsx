import { createSlice, PayloadAction } from "@reduxjs/toolkit";


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

interface ProfileState {
  profile: UserProfile | null;
}

const initialState: ProfileState = {
  profile: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload;
    },
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
