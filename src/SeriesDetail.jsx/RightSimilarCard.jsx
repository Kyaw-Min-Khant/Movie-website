import React from "react";
import { Rating } from "@mantine/core";
import { useNavigate } from "react-router-dom";
const RightSimilarCard = ({
  title,
  poster_path,
  id,
  vote_average,
  release_date,
  name,
  first_air_date,
}) => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav(`/detailseries/${id}`, { state: { id } })}
      key={id}
      className="flex gap-3 my-3 py-1 shadow-lg  transition-[0.3s] shadow-[#2b2b2b] hover:bg-[#2e2e2e] w-[400px] lg:w-[280px]"
    >
      <img
        src={"https://image.tmdb.org/t/p/original" + poster_path}
        alt=""
        className="w-[90px] h-[100px]"
      />
      <div className="w-[190px]">
        <h2 className="text-sm text-white truncate">{title || name}</h2>
        <div className="mt-2">
          <Rating
            value={vote_average / 2}
            fractions={4}
            color="red"
            size="sm"
            readOnly
          />
        </div>
        <h2 className="text-xs mt-2 text-[#cec7c7b3] truncate">
          {release_date || first_air_date}
        </h2>
      </div>
    </div>
  );
};

export default RightSimilarCard;
