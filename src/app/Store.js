import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "../features.jsx/MoviesSlice";
import { myApi } from "../Services/myapi";
import { ExplorerSearch } from "../Services/ExplorerSearch";
export const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
    [ExplorerSearch.reducerPath]: ExplorerSearch.reducer,
    movie: MoviesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware, ExplorerSearch.middleware),
});
