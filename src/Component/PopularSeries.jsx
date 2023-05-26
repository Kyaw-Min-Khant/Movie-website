import React, { useState, useEffect } from "react";
import SeriesCard from "./SeriesCard";
import { usePopularSeriesQuery } from "../Services/myapi";

const PopularSeries = () => {
  const { data: ApiData } = usePopularSeriesQuery();
  const tvShow = ApiData?.results;
  const movies = tvShow?.map((movie) => (
    <SeriesCard key={movie.id} {...movie} />
  ));
  return (
    <div className="py-2">
      <h2 className=" text-[#FFEAEA] text-2xl font-bold py-3">Popular</h2>
      <div
        style={{ scrollBehavior: "smooth" }}
        className=" flex justify-between overflow-scroll gap-5 "
      >
        {movies}
      </div>
    </div>
  );
};

export default PopularSeries;
