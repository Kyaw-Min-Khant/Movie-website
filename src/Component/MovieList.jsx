import React, { useTransition } from "react";
import PopularMovies from "./PopularMovies";
import TopRatedMovie from "./TopRatedMovie";
import Hot from "./Hot";
import Carousel from "./Carousel";
import { useCarouselQuery } from "../Services/myapi";
import LazyLoading from "./LazyLoading";
const MovieList = () => {
  const { isLoading } = useCarouselQuery();
  if (isLoading) {
    return <LazyLoading />;
  }
  return (
    <div className="max-w-[1000px] shadow-lg px-4 py-2">
      <Carousel />
      <PopularMovies />
      <TopRatedMovie />
      <Hot />
    </div>
  );
};

export default MovieList;
