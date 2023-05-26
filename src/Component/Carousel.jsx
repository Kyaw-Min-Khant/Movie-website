import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import "./carousel.css";
import Slide from "./Slide";
import { useCarouselQuery } from "../Services/myapi";
import LazyLoading from "./LazyLoading";
const Carousel = () => {
  const { data: apiData,isLoading } = useCarouselQuery();
  const movies = apiData?.results;
  if(isLoading){
    return <LazyLoading/>
  }
  return (
    <div className="">
      <>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          navigation={true}
          style={{ color: "red" }}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          loop
          className="swiper-container"
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Slide {...movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Carousel;
