import React, { useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import MovieCard from "../Component/MovieCard";
import { useLocation } from "react-router-dom";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { FaListUl } from "react-icons/fa";
const Searchmovies = () => {
  const location = useLocation();
  const data = location?.state?.inputSearch;
  const otherData = location?.state?.inputMovie;
  const exploreData = location?.state?.inputDetails;
  const [input, setInput] = useState(data || otherData || exploreData);
  const [search, setSearch] = useState("");
  const [multi, setMulti] = useState([]);
  const [load, setLoad] = useState(true);
  const [select, setSelect] = useState(["multi"]);
  const [add, setAdd] = useState(1);
  const run = (e) => {
    e.preventDefault();
    apiFetch();
  };
  useEffect(() => {
    setLoad(true);
    setInput(data);
    apiFetch();
    setLoad(false);
  }, [data, add]);
  const apiFetch = async () => {
    setLoad(true);
    const api = await fetch(
      `https://api.themoviedb.org/3/search/${select}?api_key=a6af80b02b99c9fae32ba3c9259d4844&language=en-US&query=${
        search || input || exploreData
      }&page=${add}&include_adult=false`
    );
    const { results } = await api.json();
    setMulti(results);
    setLoad(false);
    setInput(" ");
  };
  return (
    <div className="">
      <div className="sm:ml-0   md:ml-[70px] lg:ml-[100px] flex justify-around gap-5">
        <div className="md:hidden sm:block fixed top-[70px] right-[15px] z-[1000]">
          <div className="dropdown dropdown-hover dropdown-end">
            <label
              tabIndex={0}
              className="z-[1000]   text-sm  btn border-0 shadow-xl bg-[#1C1C1E]"
            >
              <FaListUl />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu  shadow  m-0  rounded bg-[#1C1C1E]"
            >
              <div className="px-1">
                <li onClick={(e)=>setSelect("multi")} value="multi">
                  <h2 className=" text-sm text-white red py-[2px]">All</h2>
                </li>
                <li onClick={(e)=>setSelect("movie")} value="movie">
                  <h2 className=" text-sm text-white red py-[2px]">Movie</h2>
                </li>
                <li onClick={(e)=>setSelect("tv")} value="tv">
                  <h2 className=" text-sm text-white red py-[2px]">Tv</h2>
                </li>
              </div>
              <li onClick={(e)=>setSelect("person")} value="person">
                <h2 className="text-sm text-white mx-auto block py-[2px] red">
                  Person
                </h2>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex max-w-[1000px] min-h-screen flex-col  gap-8 bg-[#1C1C1E]">
          <h2 className="text-2xl p-2 mx-auto justify-center text-white">
            Find your favourite movies, TV shows, people and more
          </h2>
          <form onSubmit={run} className="item-center">
            <input
              type="text"
              placeholder="Search ..."
              value={search}
              className="input input-bordered block mx-auto input-md w-[300px] md:w-[400px] lg:w-[500px] text-white bg-[#393646]"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <div className="flex justify-around md:gap-5 sm:gap-2  flex-wrap align-middle">
            {multi.length < 3 ? (
              <div className="mx-auto">
                <img
                  className=" items-center mt-8 h-[300px]"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
            ) : (
              <>
                {multi?.map((item) => {
                  return <MovieCard key={item.id} {...item} />;
                })}
              </>
            )}
          </div>
        </div>
        <div className="hidden md:block w-[200px] mt-20 mx-10">
          <Select label="Select Version">
            <Option onClick={(e) => setSelect("multi")} value="multi">
              All
            </Option>
            <Option onClick={(e) => setSelect("movie")} value="movie">
              Movie
            </Option>
            <Option onClick={(e) => setSelect("tv")} value="tv">
              Tv Show
            </Option>
            <Option onClick={(e) => setSelect("person")} value="person">
              Person
            </Option>
          </Select>
        </div>
      </div>
      {multi.length < 3 ? (
        <></>
      ) : (
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
      )}
    </div>
  );
};

export default Searchmovies;
