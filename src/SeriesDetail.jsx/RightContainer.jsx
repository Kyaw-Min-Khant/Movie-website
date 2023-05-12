import React from "react";
import { TbDatabaseOff } from "react-icons/tb";
import Left from "../Explore/Left";
import RightSeries from "./RightSeries";
import Carousel from "../Detail/Carousel";
import Review from "../Detail/Review";
import MainUI from "../Detail/MainUI";
const RightContainer = (props) => {
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
    <div className="lg:flex block justify-around gap-2 bg-[#1C1C1E] min-h-screen">
      <Left />
      <div className="overflow-hidden">
       <MainUI {...props}/>
      </div>
      <RightSeries />
    </div>
  );
};

export default RightContainer;
