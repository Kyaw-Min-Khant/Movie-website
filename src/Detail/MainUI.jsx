import React from "react";
import Carousel from "./Carousel";
import ReviewPart from "./ReviewPart";
import DetailHero from "./DetailHero";

const MainUI = (props) => {
  const {
    backdrop_path,
    budget,
    homepage,
    popularity,
    title,
    vote_average,
    overview,
    genres,
    runtime,
    poster_path,
    tagline,
    original_title,
    release_date,
    status,
    production_countries,
    generateUrl,
    userReview,
    clipUrl,
  } = props;
  return (
    <div className="md:ml-[50px] ml-0 max-w-[1200px]">
      <DetailHero {...props} />
      <div className="lg:flex md:block lg:justify-start   lg:gap-x-5  gap-x-0 ">
        <Carousel {...props} />
        <ReviewPart userReview={userReview} />
      </div>
    </div>
  );
};

export default MainUI;
