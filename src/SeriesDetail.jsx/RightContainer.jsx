import React from "react";
import { TbDatabaseOff } from "react-icons/tb";
import Left from "../Explore/Left";
import RightSeries from "./RightSeries";
import Carousel from "../Detail/Carousel";
import Review from "../Detail/Review";
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
    <div className="lg:flex block  justify-start gap-5 bg-[#1C1C1E] min-h-screen">
      <Left />
      <div className="overflow-hidden">
        <div className="md:ml-[50px] ml-0 max-w-[1200px]">
          <div className="relative">
            <img
              className=" h-[550px]  max-w-[1000px]   rounded-lg opacity-60"
              src={
                "https://image.tmdb.org/t/p/original" + backdrop_path ||
                poster_path
              }
              alt=""
            />
            <div className=" absolute top-20 left-10">
              <img
                src={
                  "https://image.tmdb.org/t/p/original" + poster_path ||
                  backdrop_path
                }
                className="h-[350px] w-[300px] rounded"
                alt=""
              />
            </div>
            <h2 className="absolute lg:block hidden  text-3xl font-semibold text-white top-[330px] left-[400px]">
              {title}
            </h2>
            <div className="flex justify-evenly absolute left-[350px]  top-[400px]">
              {genres?.map((item) => (
                <h2
                  key={item?.id}
                  className=" text-xl mx-3  lg:block hidden border-[#ffffffb3] border-[1px] px-3 py-1 rounded text-[#ffffffb3] "
                >
                  {item?.name}
                </h2>
              ))}
            </div>
            <button className=" text-xl px-5 py-1 absolute border-white border-2 text-white top-[480px] hover:bg-red-600 hover:border-red-600 rounded-lg font-semibold right-[10%]">
              <a target="_blank" href={homepage} className="">
                Watch
              </a>
            </button>
          </div>
          <div className="lg:flex md:block justify-start gap-x-5">
            <Carousel {...props} />
            <div className="pt-5 lg:pl-6 pl-3 border-l-[1px] border-[#4b4d4a]">
              <h2 className="text-white text-2xl mb-5 font-semibold font-serif">
                Review
              </h2>
              <div className="w-[350px] md:h-[300px] h-[200px] flex flex-col lg:h-[400px] overflow-scroll">
                {userReview?.map((item) => (
                 <Review key={item.id} {...item}/>
                ))}
                <div className="mx-auto">
                  {userReview?.length === 0 ? (
                    <div className="">
                      <TbDatabaseOff className="mt-5 text-2xl mx-auto text-[#BFCCB5] " />
                      <h2 className="text-xl pt-5 text-[#BFCCB5] ">
                        No Data Found
                      </h2>
                    </div>
                  ) : (
                    <hr />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RightSeries />
    </div>
  );
};

export default RightContainer;
