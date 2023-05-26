import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const ExplorerSearch = createApi({
  reducerPath: "ExplorerSearch",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  tagTypes: ["ExplorerSearch"],
  endpoints: (builder) => ({
    exploreMovies: builder.query({
      query: (add) => ({
        url: `movie/popular?api_key=a6af80b02b99c9fae32ba3c9259d4844&language=en-US&page=${add}`,
        method: "GET",
        providesTags: ["ExplorerSearch"],
      }),
    }),
    exploreSeries: builder.query({
      query: (add) => ({
        url: `tv/popular?api_key=a6af80b02b99c9fae32ba3c9259d4844&language=en-US&page=${add}`,
        method: "GET",
        providesTags: ["ExplorerSearch"],
      }),
    }),
  }),
});
export const {
  useExploreMoviesQuery,
  useExploreSeriesQuery,
  useSearchAllQuery,
} = ExplorerSearch;
