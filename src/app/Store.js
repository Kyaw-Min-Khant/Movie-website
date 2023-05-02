import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "../features.jsx/MoviesSlice";
import { myApi } from "../Services/myapi";
export const store=configureStore({
    reducer:{
          [myApi.reducerPath]: myApi.reducer,
       movie:MoviesSlice
    },
      middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});