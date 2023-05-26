import React, { useState } from "react";
import ExploreSeries from "./ExploreSeries";
import ExplorePopular from "./ExplorePopular";
const Explore = () => {
  const [hide, setHide] = useState(true);

  return (
    <div className="w-[1500px]">
      <div className="flex justify-start">
        <h2
          onClick={() => setHide(true)}
          className={
            hide
              ? "text-xl text-white mx-3 py-2 border-b-2 border-red-600"
              : "text-xl text-white mx-3 py-2 "
          }
        >
          Movies
        </h2>
        <h2
          onClick={() => setHide(false)}
          className={
            hide
              ? "text-xl text-white mx-3 py-2 "
              : "text-xl text-white mx-3 py-2  border-b-2 border-red-600"
          }
        >
          Series
        </h2>
      </div>
      <>{hide ? <ExplorePopular /> : <ExploreSeries />}</>
    </div>
  );
};

export default Explore;
