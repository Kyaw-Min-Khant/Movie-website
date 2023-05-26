import React, { useState } from "react";
import Youtube from "./Youtube";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import OverView from "./OverView";
import Analysis from "./Analysis";
const Carousel = (props) => {
  const {
    backdrop_path,
    budget,
    homepage,
    popularity,
    title,
    vote_average,
    overview,
    genres,
    runtime,
    poster_path,
    tagline,
    original_title,
    release_date,
    status,
    production_countries,
    generateUrl,
    userReview,
    clipUrl,
  } = props;
  const [hide, setHide] = useState(true);

  const data = [
    {
      label: "Overview",
      value: "overview",
      desc: <OverView {...props} />,
    },
    {
      label: "Analysis",
      value: "analysis",
      desc: <Analysis {...props} />,
    },
    {
      label: "YouTube",
      value: "youtube",
      desc: (
        <div className="lg:w-[600px]">
          <div className="flex justify-start">
            <h2
              onClick={() => setHide(true)}
              className={
                hide
                  ? "text-xl text-white mx-3 py-2 border-b-2 border-red-600"
                  : "text-xl text-white mx-3 py-2 "
              }
            >
              Trailer
            </h2>
            <h2
              onClick={() => setHide(false)}
              className={
                hide
                  ? "text-xl text-white mx-3 py-2 "
                  : "text-xl text-white mx-3 py-2  border-b-2 border-red-600"
              }
            >
              Behind the Scenes
            </h2>
          </div>
          <div className=" px-0 lg:w-[600px]">
            {hide ? (
              <Youtube generateUrl={generateUrl} />
            ) : (
              <Youtube generateUrl={clipUrl} />
            )}
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="lg:w-[600px] min-h-[400px] pt-5 px-1 md:px-3">
      <Tabs value="overview" className="">
        <TabsHeader>
          {data?.map(({ label, value }) => (
            <Tab key={value} value={value} className="active:bg-red-500">
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="px-0 md:px-3">
          {data?.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Carousel;
