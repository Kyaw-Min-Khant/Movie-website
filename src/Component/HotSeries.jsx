import React, { useEffect, useState } from "react";
import SeriesCard from "./SeriesCard";
const HotSeries = () => {
  const [hotSeries, setHotSeries] = useState([]);
  useEffect(() => {
    run();
  }, []);
  const run = async () => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=a6af80b02b99c9fae32ba3c9259d4844&language=en-US&page=2"
    );
    const { results } = await fetchData.json();
    setHotSeries(results);
  };
  return (
    <div className="py-2">
      <h2 className=" text-[#FFEAEA] text-2xl font-bold py-3">Hot</h2>
      <div
        style={{ scrollBehavior: "smooth" }}
        className=" flex justify-between overflow-scroll gap-5 "
      >
        {hotSeries?.map((movie) => (
          <SeriesCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default HotSeries;
