import { createSlice } from "@reduxjs/toolkit";

const user = {
  username: null,
  email: null,
  uid: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: user,
  reducers: {
    signInUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
    signOutUser: (state) => {
      state.username = null;
      state.email = null;
      state.uid = null;
    },
  },
});

export const { signInUser, signOutUser } = userSlice.actions;

export default userSlice.reducer;
