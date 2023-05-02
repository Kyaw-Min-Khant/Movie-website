import React from "react";
import Searchmovies from "./Searchmovies";
import Left from "../Explore/Left";
import Menu from "../Component/Menu";

const SearchList = () => {
  return (
    <div className="bg-[#1C1C1E] overflow-hidden flex justify-between">
      <Left className=""/>
      <Menu/>
      <Searchmovies className="ml-5" />
    </div>
  );
};

export default SearchList;
