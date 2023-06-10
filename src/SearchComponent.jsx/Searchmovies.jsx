import React, { useEffect, useState } from "react";
import MovieCard from "../Component/MovieCard";
import { useLocation } from "react-router-dom";
import SearchDropDown from "./SearchDropDown";
import ReponsiveDropDown from "./ReponsiveDropDown";
import SeriesNextPage from "./SeriesNextPage";
import SearchMainPage from "./SearchMainPage";
const Searchmovies = () => {
  const location = useLocation();
  const data = location?.state?.Data;
  const otherData = location?.state?.Data;
  const exploreData = location?.state?.Data;
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
  const movies = multi?.map((item) => {
    return <MovieCard key={item.id} {...item} />;
  });
  return (
    <div className="">
      <div className="sm:ml-0   md:ml-[70px] lg:ml-[50px] flex justify-around">
        <SearchDropDown setSelect={setSelect} />
        <SearchMainPage
          run={run}
          setSearch={setSearch}
          search={search}
          movies={movies}
          multi={multi}
        />
        <ReponsiveDropDown setSelect={setSelect} />
      </div>
      {multi.length < 5 ? <></> : <SeriesNextPage setAdd={setAdd} add={add} />}
    </div>
  );
};

export default Searchmovies;
