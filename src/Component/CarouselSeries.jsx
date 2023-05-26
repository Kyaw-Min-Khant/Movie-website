import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import Slide from "./Slide";
import LazyLoading from "./LazyLoading";
import { useCarouselSeriesQuery } from "../Services/myapi";

const CarouselSeries = () => {
  const { data: ApiData, isLoading } = useCarouselSeriesQuery();
  const series = ApiData?.results;
  if (isLoading) {
    <LazyLoading />;
  }
  return (
    <div>
      <div>
        <>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            navigation={true}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            loop
            className="swiper-container"
          >
            {series?.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Slide {...movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default CarouselSeries;
