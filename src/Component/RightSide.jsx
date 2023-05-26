import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SimilarCard from "../Detail/SimilarCard";
import { useRightSidebarQuery } from "../Services/myapi";

const RightSide = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const run = (e) => {
    const Data = inputRef.current.value;
    e.preventDefault();
    navigate("/search", { state: { Data } });
  };
  const { data: ApiData } = useRightSidebarQuery();
  const popular = ApiData?.results;
  const cards = popular?.map((item) => <SimilarCard key={item.id} {...item} />);
  return (
    <div className="">
      <div className=" w-[300px] min-h-screen lg:block md-block hidden">
        <div className="fixed top-2">
          <div className="pt-3 px-1 ">
            <form onSubmit={run}>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search"
                className="input input-bordered mx-auto block bg-[#343333] text-white w-[250px] font-mono input-sm"
              />
            </form>
          </div>
          <div className="p-3 mb-2 font-semibold">
            <h2 className=" text-white text-xl">Trending</h2>
            <div className="h-screen pb-[100px] overflow-scroll">{cards}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
