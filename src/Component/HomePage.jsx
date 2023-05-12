import React, { useEffect, useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Menu from "./Menu";
import LazyLoading from "./LazyLoading";
const LazyMovieList = React.lazy(() => import("./MovieList"));
const LazyTv = React.lazy(() => import("./SeriesList"));
const HomePage = () => {
  const [hide, setHide] = useState(true);
  return (
    <div className="bg-[#1C1C1E] relative flex justify-between">
      <LeftSide />
      <Menu className="" />
      <div className="max-w-[1000px] overflow-hidden">
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
        <>
          {hide ? (
            <React.Suspense fallback={<LazyLoading />}>
              <LazyMovieList />
            </React.Suspense>
          ) : (
            <React.Suspense fallback={<LazyLoading />}>
              <LazyTv />
            </React.Suspense>
          )}
        </>
      </div>
      <RightSide />
    </div>
  );
};

export default HomePage;
