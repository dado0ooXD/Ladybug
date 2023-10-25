import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import commentSlice from "./commentSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    comments: commentSlice,
  },
});
