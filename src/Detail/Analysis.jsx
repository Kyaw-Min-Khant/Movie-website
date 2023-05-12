import React from "react";
import { Rating } from "@mantine/core";


const Analysis = ({
  original_title,
  budget,
  production_countries,
  popularity,
  vote_average,
  release_date,
  runtime,
  status,
}) => {
  return (
    <div className="lg:w-[600px] md:w-[500px] w-[300px]">
      <h2 className="text-2xl text-[#ffffff]  font-semibold">
        {original_title}
      </h2>
      <div className=" flex justify-between">
        <div className="">
          <h2 className="tracking-wider pt-2 font-mono text-md   text-[#ffffffb3] ">
            Budget: $ {budget}
          </h2>
          <h2 className="tracking-wider pt-2 font-mono text-md   text-[#ffffffb3]">
            Popularity: {popularity}
          </h2>
          <h2 className="tracking-wider pt-2 font-mono text-md   text-[#ffffffb3] ">
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
          <h2 className="tracking-wider pt-2 font-mono text-md    text-[#ffffffb3] ">
            ReleaseDate: {release_date}
          </h2>
          <h2 className="tracking-wider pt-2 font-mono text-md    text-[#ffffffb3] ">
            Runtime: {runtime} min
          </h2>
          <h2 className="tracking-wider pt-2 font-mono text-md   text-[#ffffffb3] ">
            Status: {status}
          </h2>
          <div className="tracking-wider pt-2  ">
            {production_countries?.map((item) => (
              <h2
                key={item.iso_3166_1}
                className="font-mono text-md    text-[#ffffffb3]"
              >
                {item.name}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
