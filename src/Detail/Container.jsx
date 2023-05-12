import React from "react";


import Left from "../Explore/Left";
import Right from "./Right";
import MainUI from "./MainUI";
const Container = (props) => {
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
        <MainUI {...props} />
      </div>
      <Right />
    </div>
  );
};

export default Container;
