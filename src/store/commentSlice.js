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
    userComment: {
      user: "",
    },
  },
  reducers: {
    addComment: (state, action) => {
      state.comment.postId = action.payload.id;
    },
    addText: (state, action) => {
      state.text.commentText = action.payload.commentText;
    },
    addUserComment: (state, action) => {
      state.userComment.user = action.payload.userComment;
    },
  },
});

export const { addComment, addText, addUserComment } = commentSlice.actions;

export default commentSlice.reducer;
