import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { usePopularMoviesQuery } from "../Services/myapi";

const PopularMovies = () => {
  const { data: ApiData } = usePopularMoviesQuery();
  const movies = ApiData?.results;
  const films = movies?.map((movie) => <MovieCard key={movie.id} {...movie} />);
  return (
    <div className="py-2">
      <h2 className=" text-[#FFEAEA] text-2xl font-bold py-3">Popular</h2>
      <div
        style={{ scrollBehavior: "smooth" }}
        className=" flex justify-between overflow-scroll gap-5"
      >
        {films}
      </div>
    </div>
  );
};

export default PopularMovies;
