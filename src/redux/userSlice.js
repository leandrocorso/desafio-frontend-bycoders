import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: "",
    isLogged: false,
  },
  reducers: {
    login: (state) => {
      state.isLogged = true;
    },
    logout: (state) => {
      state.isLogged = false;
    },
  },
});

export const { login, logout } = userSlice;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
