import React from 'react'
import CarouselSeries from './CarouselSeries'
import PopularSeries from './PopularSeries'
import TopRatedSeries from './TopRatedSeries'
import HotSeries from './HotSeries'

const SeriesList = () => {
  return (
    <div className="max-w-[1000px] border-x-[1px] border-slate-[#737272] px-4 py-2">
      <CarouselSeries />
      <PopularSeries />
      <TopRatedSeries />
      <HotSeries />
    </div>
  );
}

export default SeriesList