import React, { useEffect, useState } from "react";
import SeriesCard from "./SeriesCard";
import { useHotSeriesQuery } from "../Services/myapi";
const HotSeries = () => {
  const { data: ApiData } = useHotSeriesQuery();
  const hotSeries = ApiData?.results;
  const movies = hotSeries?.map((movie) => (
    <SeriesCard key={movie.id} {...movie} />
  ));
  return (
    <div className="py-2">
      <h2 className=" text-[#FFEAEA] text-2xl font-bold py-3">Hot</h2>
      <div
        style={{ scrollBehavior: "smooth" }}
        className=" flex justify-between overflow-scroll gap-5 "
      >
        {movies}
      </div>
    </div>
  );
};

export default HotSeries;
