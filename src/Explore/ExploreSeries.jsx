import React, { useRef, useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import SeriesCard from "../Component/SeriesCard";
import LazyLoading from "../Component/LazyLoading";
import { useNavigate } from "react-router-dom";
import { useExploreSeriesQuery } from "../Services/ExplorerSearch";
const ExploreSeries = () => {
  const [add, setAdd] = useState(1);
  const navigate = useNavigate();
  const inputRef = useRef();
  const formHandler = (e) => {
    const Data = inputRef.current.value;
    e.preventDefault();
    navigate("/search", { state: { Data } });
  };
  const { data: ApiData, isLoading } = useExploreSeriesQuery(add);
  const movies = ApiData?.results;
  const films = movies?.map((item) => <SeriesCard key={item.id} {...item} />);
  if (isLoading) {
    return <LazyLoading />;
  }
  return (
    <div>
      <div className="py-5 flex flex-col justify-center items-center gap-3">
        <h2 className="text-2xl text-center mx-auto justify-center items-center text-white">
          FIND FILMS THAT BEST FIT YOU
        </h2>
        <form onSubmit={formHandler} className="mx-[34%] my-5">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search ..."
            className="input input-bordered items-center  input-md w-[300px] md:w-[400px] lg:w-[500px] text-white bg-[#393646]"
          />
        </form>
        <div className="flex justify-around lg:justify-start flex-wrap md:gap-1 lg:gap-6">
          {films}
        </div>
        <div className=" mx-auto flex justify-center align-middle pt-5">
          <button
            onClick={() => {
              setAdd(add - 1);
            }}
            className=" text-2xl px-1  border-[1px] border-[#5d5959] shadow-lg shadow-[#373737] text-white"
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button className=" text-2xl px-3  mx-2 border-[1px] border-[#5d5959] shadow-lg shadow-[#373737] text-white">
            {add}
          </button>
          <button
            onClick={() => {
              setAdd(add + 1);
            }}
            className=" text-2xl px-1 border-[1px] border-[#5d5959] shadow-lg shadow-[#373737] text-white"
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreSeries;
