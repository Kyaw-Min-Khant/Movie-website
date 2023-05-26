import React from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
const SeriesNextPage = ({ setAdd,add }) => {
  return (
    <div className=" mx-auto pb-3 flex justify-center align-middle pt-5">
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
  );
};

export default SeriesNextPage;
