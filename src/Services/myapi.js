import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  tagTypes: ["myApi"],
  endpoints: (builder) => ({
    carousel: builder.query({
      query: () => ({
        url: "movie/upcoming?api_key=a6af80b02b99c9fae32ba3c9259d4844",
        method: "GET",
        providesTags: ["myApi"],
      }),
    }),
    carouselSeries: builder.query({
      query: () => ({
        url: "https://api.themoviedb.org/3/trending/tv/day?api_key=a6af80b02b99c9fae32ba3c9259d4844&language=en-US",
        method: "GET",
        providesTags: ["myApi"],
      }),
    }),
    hotMovies: builder.query({
      query: () => ({
        url: "movie/top_rated?api_key=a6af80b02b99c9fae32ba3c9259d4844&l&page=2",
        method: "GET",
        providesTags: ["myApi"],
      }),
    }),
    hotSeries: builder.query({
      query: () => ({
        url: "tv//top_rated?api_key=a6af80b02b99c9fae32ba3c9259d4844&l&page=2",
        method: "GET",
        providesTags: ["myApi"],
      }),
    }),
    popularMovies: builder.query({
      query: () => ({
        url: "movie/popular?api_key=a6af80b02b99c9fae32ba3c9259d4844&page=2",
        method: "GET",
        providesTags: ["myApi"],
      }),
    }),
    popularSeries: builder.query({
      query: () => ({
        url: "tv/popular?api_key=a6af80b02b99c9fae32ba3c9259d4844&page=2",
        method: "GET",
        providesTags: ["myApi"],
      }),
    }),
    topRatedMovies: builder.query({
      query: () => ({
        url: "trending/movie/day?api_key=a6af80b02b99c9fae32ba3c9259d4844&page=1",
        method: "GET",
        providesTags: ["myApi"],
      }),
    }),
    topRateSeries: builder.query({
      query: () => ({
        url: "trending/tv/day?api_key=a6af80b02b99c9fae32ba3c9259d4844&page=2",
        method: "GET",
        providesTags: ["myApi"],
      }),
    }),
    rightSidebar: builder.query({
      query: () => ({
        url: "/trending/all/week?api_key=a6af80b02b99c9fae32ba3c9259d4844&page=1",
        method: "GET",
        providesTags: ["myApi"],
      }),
    }),
  }),
});
export const {
  useCarouselQuery,
  useCarouselSeriesQuery,
  useHotMoviesQuery,
  useHotSeriesQuery,
  usePopularMoviesQuery,
  usePopularSeriesQuery,
  useTopRatedMoviesQuery,
  useTopRateSeriesQuery,
  useRightSidebarQuery,
} = myApi;
