import React from "react";
import { BsStarFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Slide = (props) => {
  const navigate = useNavigate();
  const {
    name,
    id,
    title,
    backdrop_path,
    popularity,
    overview,
    vote_average,
    release_date,
    poster_path,
    first_air_date,
  } = props;
  const backGroundImage = "https://image.tmdb.org/t/p/original" + poster_path;
  return (
    <div
      onClick={() => navigate(`/detail/${id}`, { state: { id } })}
      className="max-w-[1000px] relative"
    >
      <div className=" flex  items-center justify-between absolute top-2 left-2 bg-[#ff0000] px-[6px] py-[2px] rounded-lg text-white opacity-100">
        <BsStarFill />
        {vote_average.toFixed(1)}
      </div>
      <div
        style={{
          backgroundImage: `url(${backGroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="rounded-lg h-[350px] max-w-[1000px] opacity-[0.15]"
      ></div>
      <div className="hidden lg:block  absolute top-[15%] left-[5%]  opacity-100 ">
        <img
          src={"https://image.tmdb.org/t/p/original" + backdrop_path}
          alt=""
          className="h-[200px] opacity-100 rounded-lg"
        />
      </div>
      <div className="w-[320px] absolute overflow-scroll  p-3 top-8 right-[5%]  opacity-100">
        <h2 className=" truncate text-2xl text-[#ff1212] font-semibold font-sans">
          {title?.substring(0, 25) || name?.substring(0, 25)}
        </h2>
        <h2 className="text-xl font-semibold font-mono text-white pt-1">
          ReleaseDate : {first_air_date || release_date}
        </h2>
        <h2 className="text-xl font-semibold font-mono text-white py-1">
          Overview
        </h2>
        <h2 className="h-[100px] text-sm font-mono  text-[#cfcccc] ">
          {overview}
        </h2>
      </div>
    </div>
  );
};

export default Slide;
