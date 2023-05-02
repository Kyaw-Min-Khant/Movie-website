import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SimilarCard from "../Detail/SimilarCard";

const RightSide = () => {
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState();
  const [popular, setPopular] = useState([]);
  const run = (e) => {
    e.preventDefault();
    navigate("/search", { state: { inputSearch } });
  };
  const apiFetch = async () => {
    const trendingFetch = await fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=a6af80b02b99c9fae32ba3c9259d4844"
    );
    const data = await trendingFetch.json();
    setPopular(data.results);
  };
  useEffect(() => {
    apiFetch();
  }, []);
  return (
    <div className="">
      <div className=" w-[300px] min-h-screen lg:block md-block hidden">
        <div className="fixed top-2">
          <div className="pt-3 px-1 ">
            <form onSubmit={run}>
              <input
                onChange={(e) => setInputSearch(e.target.value)}
                type="text"
                placeholder="Search"
                className="input input-bordered mx-auto block bg-[#343333] text-white w-[250px] font-mono input-sm"
              />
            </form>
          </div>
          <div className="p-3 mb-2 font-semibold">
            <h2 className=" text-white text-xl">Trending</h2>
            <div className=" h-screen overflow-scroll">
              {popular?.map((item) => (
                <SimilarCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
