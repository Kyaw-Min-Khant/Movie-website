import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation,Autoplay } from "swiper";
import "./carousel.css"
import Slide from './Slide';
const Carousel = () => {
        const [movies, setMovies] = useState([]);
        useEffect(() => {
          run();
        }, []);
        const run = async () => {
          const fetchData = await fetch(
            "https://api.themoviedb.org/3/trending/all/week?api_key=a6af80b02b99c9fae32ba3c9259d4844"
          );
          const { results } = await fetchData.json();
          setMovies(results);
        };
  return (
    <div className=''>
      <>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          navigation={true}
          style={{color:"red"}}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          loop
          className="swiper-container"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Slide {...movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
}

export default Carousel