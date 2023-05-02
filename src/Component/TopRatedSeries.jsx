import React, { useEffect, useState } from 'react';
import SeriesCard from './SeriesCard';

const TopRatedSeries = () => {
      const [topRatedSeries, setTopRatedSeries] = useState([]);
      useEffect(() => {
        run();
      }, []);
      const run = async () => {
        const fetchData = await fetch(
          "https://api.themoviedb.org/3/tv/top_rated?api_key=a6af80b02b99c9fae32ba3c9259d4844&language=en-US&page=1"
        );
        const { results } = await fetchData.json();
        setTopRatedSeries(results);
      };
  return (
    <div>
      {" "}
      <div className="py-2">
        <h2 className=" text-[#FFEAEA] text-2xl font-bold py-3">Top Rated</h2>
        <div
          style={{ scrollBehavior: "smooth" }}
          className=" flex justify-between overflow-scroll gap-5"
        >
          {topRatedSeries?.map((movie) => (
            <SeriesCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopRatedSeries