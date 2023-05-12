import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = {
  user: null,
  token: null,
};
export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      Cookies.set("user", JSON.stringify(state.user), 7);
      Cookies.set("token", state.token, 7);
    },
    removeUser: (state, { payload }) => {
      state.user = null;
      state.token = null;
      Cookies.remove("token");
      Cookies.remove("user");
    },
  },
});
export const { addUser, removeUser } = movieSlice.actions;
export default movieSlice.reducer;
