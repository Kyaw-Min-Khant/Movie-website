import React, { useState,useEffect } from 'react'
import MovieCard from './MovieCard';
const Hot = () => {
    const [hot,setHot]=useState([]);
        useEffect(() => {
          run();
        }, []);
        const run = async () => {
          const fetchData = await fetch(
            "https://api.themoviedb.org/3/trending/all/day?api_key=a6af80b02b99c9fae32ba3c9259d4844"
          );
          const { results } = await fetchData.json();
          setHot(results);
        };
  return (
    <div className="py-2">
      <h2 className=" text-[#FFEAEA] text-2xl font-bold py-3">Hot</h2>
      <div
        style={{ scrollBehavior: "smooth" }}
        className=" flex justify-between overflow-scroll gap-5"
      >
        {hot?.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default Hot