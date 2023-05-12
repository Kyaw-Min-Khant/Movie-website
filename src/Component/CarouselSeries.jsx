import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import Slide from "./Slide";
import LazyLoading from "./LazyLoading";

const CarouselSeries = () => {
  const [series, setSeries] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    run();
  }, []);
  const run = async () => {
    setLoad(true);
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=a6af80b02b99c9fae32ba3c9259d4844&language=en-US&page=2"
    );
    const { results } = await fetchData.json();
    setSeries(results);
    setLoad(false);
  };
  if (load) {
    return <LazyLoading />;
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
            {series.map((movie) => (
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
