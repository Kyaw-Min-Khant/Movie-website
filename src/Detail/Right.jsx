import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SimilarCard from "./SimilarCard";
import { TbDatabaseOff } from "react-icons/tb";
const Right = () => {
  const nav = useNavigate();
  const location = useLocation();
  const similarId = location?.state?.id;
  const [movie, setMovie] = useState([]);
  const [inputMovie, setInputMovie] = useState();
  const similarFetch = async () => {
    const apiFetch = await fetch(
      `https://api.themoviedb.org/3/movie/${similarId}/similar?api_key=a6af80b02b99c9fae32ba3c9259d4844&language=en-US&page=1`
    );
    const movieFetch = await apiFetch.json();
    setMovie(movieFetch.results);
  };
  useEffect(() => {
    similarFetch();
  }, [similarId]);
  const run = (e) => {
    e.preventDefault();
    nav("/search", { state: { inputMovie } });
  };
  return (
    <div className="">
      <div className="lg:w-[280px] lg:pl-0 md:pl-[70px] pl-0 w-[400px]">
        <form onSubmit={run} className="py-3 px-2">
          <input
            placeholder="Search..."
            value={inputMovie}
            onChange={(e) => setInputMovie(e.target.value)}
            type="text"
            className="input input-bordered bg-[#343333]  text-white font-mono input-sm w-full max-w-xs"
          />
        </form>
        <div className="">
          <h2 className="text-xl p-2 text-white font-serif font-semibold">
            Similar
          </h2>
          <div className="overflow-scroll flex flex-col gap-y-1 lg:h-[1000px] md:w-[400px] h-[300px]">
            {movie?.map((item) => (
              <SimilarCard key={item.id} {...item} />
            ))}
            <div className="lg:ms-[100px] mx-auto">
              {movie?.length === 0 ? (
                <div className="">
                  <TbDatabaseOff className="mt-5 text-2xl mx-auto text-[#BFCCB5] " />
                  <h2 className="text-xl pt-5 text-[#BFCCB5] ">
                    No Data Found
                  </h2>
                </div>
              ) : (
                <button
                  onClick={() => nav("/ExploreList")}
                  className=" px-5 py-1 mb-3 text-lg font-medium font-sans rounded-lg text-white border-[1px] border-white"
                >
                  See More
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
