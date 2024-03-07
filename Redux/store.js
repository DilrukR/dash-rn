import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./Slices/usersSlice";
import searchSlice from "./Slices/searchSlice";
export const store = configureStore({
  reducer: {
    users: usersSlice,
    search: searchSlice,
  },
});
