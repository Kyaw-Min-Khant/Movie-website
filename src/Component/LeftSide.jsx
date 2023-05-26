import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import "./nav.css";
import { RiMovie2Line } from "react-icons/ri";
const LeftSide = () => {
  return (
    <div className="hidden md:block">
      <div className="w-[180px] min-h-screen">
        <div className=" fixed top-2">
          <h3 className=" text-2xl font-bold font-sans p-4 text-[#ff0d0d]">
            Y Movie
            <RiMovie2Line className="inline pl-1" />
          </h3>
          <h3 className="text-xl font-semibold px-3 py-2 text-[#FFEAEA]">
            Menu
          </h3>
          <div className="mb-5">
            <NavLink to="/">
              <h3 className="text-md  font-serif pl-3 py-2 red text-[#FFEAEA]">
                <AiFillHome className=" inline mr-1" />
                Home
              </h3>
            </NavLink>
            <NavLink to="/ExploreList">
              <h3 className="text-md   font-serif pl-3 py-2 red text-[#FFEAEA]">
                <MdExplore className=" inline mr-1" />
                Explore
              </h3>
            </NavLink>
            <NavLink to="/search">
              <h3 className="text-md   font-serif pl-3 py-2 red text-[#FFEAEA]">
                <AiOutlineSearch className=" inline mr-1" />
                Search
              </h3>
            </NavLink>
          </div>
          <div className="">
            <h3 className="text-xl font-semibold px-2 py-2 text-[#FFEAEA]">
              General
            </h3>
            <NavLink to="/profile">
              <h3 className="text-md   font-serif pl-3 py-2 text-[#FFEAEA]">
                <CgProfile className=" inline mr-1" />
                Profile
              </h3>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
