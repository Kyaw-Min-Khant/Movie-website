import React, { useState } from "react";
import { Rating } from "@mantine/core";
import Youtube from "./Youtube";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
const Carousel = ({
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
}) => {
  const [hide, setHide] = useState(true);

  const data = [
    {
      label: "Overview",
      value: "overview",
      desc: (
        <div className="">
          <h2 className="text-xl  font-sans text-white pb-2 tracking-wider">
            {tagline}
          </h2>
          <h2 className="text-2xl text-red-800 font-semibold tracking-wider">
            Story
          </h2>
          <div className="hover:text-red-500 transition-[0.5s]   text-[#ffffffb3]">
            {overview}
          </div>
          <div className="">
            <h2 className="text-2xl text-red-800 font-semibold tracking-wider">
              Genres
            </h2>
            {genres?.map((item) => (
              <h2
                key={item.id}
                className="hover:text-red-500 inline px-2 transition-[0.5s]   text-[#ffffffb3] "
              >
                {item.name}
              </h2>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "Analysis",
      value: "analysis",
      desc: (
        <div className="">
          <h2 className="text-2xl text-[#ffffff] hover:text-red-500 transition-[0.5s]  font-semibold">
            {original_title}
          </h2>
          <div className=" flex justify-between">
            <div className="">
              <h2 className="tracking-wider pt-2 font-mono text-md hover:text-red-500 transition-[0.5s]   text-[#ffffffb3] ">
                Budget: $ {budget}
              </h2>
              <h2 className="tracking-wider pt-2 font-mono text-md hover:text-red-500 transition-[0.5s]   text-[#ffffffb3]">
                Popularity: {popularity}
              </h2>
              <h2 className="tracking-wider pt-2 font-mono text-md hover:text-red-500 transition-[0.5s]   text-[#ffffffb3] ">
                Rating
              </h2>
              <div className="">
                <Rating
                  value={vote_average / 2}
                  fractions={4}
                  color="red"
                  size="sm"
                  readOnly
                />
              </div>
            </div>
            <div className="">
              <h2 className="tracking-wider pt-2 font-mono text-md hover:text-red-500 transition-[0.5s]   text-[#ffffffb3] ">
                ReleaseDate: {release_date}
              </h2>
              <h2 className="tracking-wider pt-2 font-mono text-md hover:text-red-500 transition-[0.5s]   text-[#ffffffb3] ">
                Runtime: {runtime} min
              </h2>
              <h2 className="tracking-wider pt-2 font-mono text-md hover:text-red-500 transition-[0.5s]  text-[#ffffffb3] ">
                Status: {status}
              </h2>
              <h2 className="tracking-wider pt-2 font-mono text-md hover:text-red-500 transition-[0.5s]   text-[#ffffffb3] ">
                {production_countries?.map((item) => (
                  <h2 key={item.iso_3166_1} className="">
                    {item.name}
                  </h2>
                ))}
              </h2>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "YouTube",
      value: "youtube",
      desc: (
        <div className="">
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
          <div className=" px-0 lg:w-[600px] md:w-[500px] w-[300px]">
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
    <div className="max-w-[600px] min-h-[400px] pt-5 px-1 md:px-3">
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
