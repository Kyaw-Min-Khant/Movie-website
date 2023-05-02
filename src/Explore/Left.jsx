import React from 'react'
import {AiFillHome} from "react-icons/ai"
import {MdExplore} from "react-icons/md"
import{BsFillBookmarkPlusFill} from "react-icons/bs"
import {AiOutlineSearch } from "react-icons/ai"
import {FaHistory} from "react-icons/fa"
import {CgProfile } from "react-icons/cg"
import { Link, NavLink } from 'react-router-dom'
import {RiMovie2Line} from "react-icons/ri"
import "./nav.css"
const Left = () => {
  return (
    <div className=' hidden md:block'>
      <div className="flex justify-between flex-col h-screen fixed top-2">
        <Link to="/" className="mx-auto">
          <h2 className="text-3xl mt-5 text-white font-semibold">
            <RiMovie2Line />
          </h2>
        </Link>
        <div className="px-3">
          <NavLink to="/">
            <h2 className=" text-xl text-white py-3 px-1 red">
              <AiFillHome />
            </h2>
          </NavLink>
          <NavLink to="/ExploreList">
            <h2 className=" text-xl text-white py-3 px-1 red">
              <MdExplore />
            </h2>
          </NavLink>
          <NavLink to="/search">
            <h2 className=" text-xl text-white py-3 px-1 red">
              <AiOutlineSearch />
            </h2>
          </NavLink>
          <h2 className=" text-xl text-white py-3 px-1 red">
            <BsFillBookmarkPlusFill />
          </h2>
          <h2 className=" text-xl text-white py-3 px-1 red">
            <FaHistory />
          </h2>
        </div>
        <NavLink to="/profile">
          <h2 className="text-2xl text-white pl-5 red">
            <CgProfile />
          </h2>
        </NavLink>
        <div className="px-3"></div>
      </div>
    </div>
  );
}

export default Left