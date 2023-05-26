import React from "react";
import CarouselSeries from "./CarouselSeries";
import PopularSeries from "./PopularSeries";
import TopRatedSeries from "./TopRatedSeries";
import HotSeries from "./HotSeries";
import { usePopularSeriesQuery } from "../Services/myapi";
import LazyLoading from "./LazyLoading";

const SeriesList = () => {
  const { isLoading } = usePopularSeriesQuery();
  if (isLoading) {
    return <LazyLoading />;
  }
  return (
    <div className="max-w-[1000px] shadow-lg px-4 py-2">
      <CarouselSeries />
      <PopularSeries />
      <TopRatedSeries />
      <HotSeries />
    </div>
  );
};

export default SeriesList;
