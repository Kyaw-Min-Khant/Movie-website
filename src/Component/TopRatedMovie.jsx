import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { useTopRatedMoviesQuery } from "../Services/myapi";

const TopRatedMovie = () => {
  const { data: ApiData } = useTopRatedMoviesQuery();
  const topRatedMovie = ApiData?.results;
  const movies = topRatedMovie?.map((movie) => (
    <MovieCard key={movie.id} {...movie} />
  ));
  return (
    <div className="py-2">
      <h2 className=" text-[#FFEAEA] text-2xl font-bold py-3">Top Rated</h2>
      <div
        style={{ scrollBehavior: "smooth" }}
        className=" flex justify-between overflow-scroll gap-5 "
      >
        {movies}
      </div>
    </div>
  );
};

export default TopRatedMovie;
