import React from 'react'
import {RiMovie2Line} from "react-icons/ri"
import { NavLink } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import "./menu.css"
const Menu = () => {
  return (
    <div className="md:hidden sm:block fixed top-[0px] right-[5px] z-[2000]">
      <div className="dropdown dropdown-bottom dropdown-end">
        <label
          tabIndex={0}
          className="z-[1000] m-1 btn border-0 shadow-xl bg-[#1C1C1E]"
        >
          <RiMovie2Line className=" text-3xl text-red-500 hover:text-red-800" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu shadow  m-0  rounded py-2 bg-[#1C1C1E]"
        >

          <div className="px-3">
            <li>
              <NavLink  to="/">
                <h2 className=" text-lg text-white red">
                  <AiFillHome />
                </h2>
              </NavLink>
            </li>
            <li>
              <NavLink  to="/ExploreList">
                <h2 className=" text-lg text-white red">
                  <MdExplore />
                </h2>
              </NavLink>
            </li>
            <li>
              <NavLink  to="/search">
                <h2 className=" text-lg text-white red">
                  <AiOutlineSearch />
                </h2>
              </NavLink>
            </li>
          </div>
          <li>
            <NavLink  to="/profile">
              <h2 className="text-2xl text-white mx-auto block red">
                <CgProfile />
              </h2>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu