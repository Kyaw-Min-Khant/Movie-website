import React, { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import SeriesCard from "../Component/SeriesCard";
import LazyLoading from "../Component/LazyLoading";
import { useNavigate } from "react-router-dom";
const ExploreSeries = () => {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(true);
  const [add, setAdd] = useState(1);
  const navigate = useNavigate();
  const [inputDetails, setInputDetails] = useState();
     const formHandler = (e) => {
       e.preventDefault();
       navigate("/search", { state: { inputDetails } });
     };

  useEffect(() => {
    run();
  }, [add]);
  const run = async () => {
    setLoad(true);
    const fetchData = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=a6af80b02b99c9fae32ba3c9259d4844&language=en-US&page=${add}`
    );
    const { results } = await fetchData.json();
    setMovies(results);
    setLoad(false);
  };
  if (load) {
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
            onChange={(e) => setInputDetails(e.target.value)}
            type="text"
            value={inputDetails}
            placeholder="Search ..."
            className="input input-bordered items-center  input-md w-[300px] md:w-[400px] lg:w-[500px] text-white bg-[#393646]"
          />
        </form>
        <div className="flex justify-around lg:justify-start flex-wrap md:gap-1 lg:gap-6">
          {movies?.map((item) => (
            <SeriesCard key={item.id} {...item} />
          ))}
        </div>
        <div className=" mx-auto flex justify-center align-middle pt-5">
          <button
            onClick={() => {
              setAdd(add - 1);
            }}
            className=" text-2xl px-3 text-white"
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button className=" text-2xl px-3 text-white">{add}</button>
          <button
            onClick={() => {
              setAdd(add + 1);
            }}
            className=" text-2xl px-3 text-white"
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreSeries;
