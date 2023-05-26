import React from "react";
import { FaListUl } from "react-icons/fa";
const SearchDropDown = ({setSelect}) => {
  return (
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
            <li onClick={(e) => setSelect("multi")} value="multi">
              <h2 className=" text-sm text-white red py-[2px]">All</h2>
            </li>
            <li onClick={(e) => setSelect("movie")} value="movie">
              <h2 className=" text-sm text-white red py-[2px]">Movie</h2>
            </li>
            <li onClick={(e) => setSelect("tv")} value="tv">
              <h2 className=" text-sm text-white red py-[2px]">Tv</h2>
            </li>
          </div>
          <li onClick={(e) => setSelect("person")} value="person">
            <h2 className="text-sm text-white mx-auto block py-[2px] red">
              Person
            </h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchDropDown;
