import React from "react";
import { AiFillHeart } from "react-icons/ai";
const DetailHero = ({
  backdrop_path,
  poster_path,
  title,
  genres,
  homepage,
}) => {
  return (
    <div className="relative">
      <img
        className=" h-[550px] max-w-[1200px]  rounded-lg opacity-60"
        src={
          "https://image.tmdb.org/t/p/original" + backdrop_path || poster_path
        }
        alt=""
      />
      <button className="px-3 absolute top-2 lg:right-5 right-[80%] py-1 rounded">
        <AiFillHeart className="active:text-xl transition-[0.2s] opacity-[1] text-3xl text-white" />
      </button>
      <div className=" absolute top-20 left-10">
        <img
          src={
            "https://image.tmdb.org/t/p/original" + poster_path || backdrop_path
          }
          className="h-[350px] w-[300px] rounded"
          alt=""
        />
      </div>
      <h2 className="absolute lg:block hidden text-3xl font-semibold text-white top-[330px] left-[400px]">
        {title}
      </h2>
      <div className="justify-evenly gap-3 flex absolute left-[350px]  top-[400px]">
        {genres?.map((item) => (
          <h2
            key={item?.id}
            className=" text-xl lg:block hidden  border-[#ffffffb3] border-[1px] px-3 py-1 rounded text-[#ffffffb3] "
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
  );
};

export default DetailHero;
