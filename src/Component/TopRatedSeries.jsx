import React, { useEffect, useState } from "react";
import SeriesCard from "./SeriesCard";
import { useTopRateSeriesQuery } from "../Services/myapi";

const TopRatedSeries = () => {
  const { data: ApiData } = useTopRateSeriesQuery();
  const topRatedSeries = ApiData?.results;
  const movies = topRatedSeries?.map((movie) => (
    <SeriesCard key={movie.id} {...movie} />
  ));
  return (
    <div>
      <div className="py-2">
        <h2 className=" text-[#FFEAEA] text-2xl font-bold py-3">Top Rated</h2>
        <div
          style={{ scrollBehavior: "smooth" }}
          className=" flex justify-between overflow-scroll gap-5"
        >
          {movies}
        </div>
      </div>
    </div>
  );
};

export default TopRatedSeries;
