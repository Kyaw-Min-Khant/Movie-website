import React, { useState, useEffect } from "react";
import SeriesCard from "./SeriesCard";

const PopularSeries = () => {
  const [tvShow, setTvShow] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=a6af80b02b99c9fae32ba3c9259d4844&language=en-US&page=1"
    );
    const { results } = await data.json();
    setTvShow(results);
  };
  return (
    <div className="py-2">
      <h2 className=" text-[#FFEAEA] text-2xl font-bold py-3">Popular</h2>
      <div
        style={{ scrollBehavior: "smooth" }}
        className=" flex justify-between overflow-scroll gap-5 "
      >
        {tvShow?.map((movie) => (
          <SeriesCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularSeries;
