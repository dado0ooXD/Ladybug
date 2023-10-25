import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "user",
  initialState: {
    content: {
      username: null,
      text: "",
    },
    comment: {
      postId: null,
    },
    text: {
      commentText: "",
    },
  },
  reducers: {
    addComment: (state, action) => {
      state.comment.postId = action.payload.id;
    },
    addText: (state, action) => {
      state.text.commentText = action.payload.text;
    },
  },
});

export const { addComment, addText } = commentSlice.actions;

export default commentSlice.reducer;
