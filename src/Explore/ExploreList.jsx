import React from "react";
import LeftSide from "../Component/LeftSide";
import Explore from "./Explore";
import Menu from "../Component/Menu";

const ExploreList = () => {
  return (
    <div className="bg-[#1C1C1E] relative  flex md:gap-5 gap-10 min-h-screen">
      <Menu />
      <LeftSide className="mr-10 lg:mr-3 hidden md:block" />
      <Explore />
    </div>
  );
};

export default ExploreList;
