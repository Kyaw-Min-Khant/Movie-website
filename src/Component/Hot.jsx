import React, { useState,useEffect } from 'react'
import MovieCard from './MovieCard';
import { useHotMoviesQuery } from '../Services/myapi';
const Hot = () => {
const {data:ApiData}=useHotMoviesQuery()
const hot=ApiData?.results
        const movies = hot?.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ));
  return (
    <div className="py-2">
      <h2 className=" text-[#FFEAEA] text-2xl font-bold py-3">Hot</h2>
      <div
        style={{ scrollBehavior: "smooth" }}
        className=" flex justify-between overflow-scroll gap-5"
      >
        {movies}
      </div>
    </div>
  );
}

export default Hot