import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccessToken: (state, { payload }) => {
      state.accessToken = payload || initialState.accessToken;
    },
  },
});

export const { setAccessToken } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
