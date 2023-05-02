import React from "react";
import PopularMovies from "./PopularMovies";
import TopRatedMovie from "./TopRatedMovie";
import Hot from "./Hot";
import Carousel from "./Carousel";

const MovieList = () => {
  return (
    <div className="max-w-[1000px] border-x-[1px] border-slate-[#737272] px-4 py-2">
      <Carousel />
      <PopularMovies />
      <TopRatedMovie />
      <Hot />
    </div>
  );
};

export default MovieList;
