import React from 'react'
import { Avatar } from "@mantine/core";
import { Link } from "react-router-dom";
const Review = ({
  id,
  author_details,
  avatar_path,
  updated_at,
  author,
  url,
  content,
}) => {
  return (
    <div key={id} className="flex gap-2 p-2 shadow-md shadow-[#d21212d8] my-3">
      <Avatar
        radius="lg"
        src={
          "https://image.tmdb.org/t/p/original" + author_details?.avatar_path
        }
        alt="it's me"
      />
      <div className="w-[300px] overflow-hidden">
        <div className="flex justify-between ">
          <h2 className=" text-md px-2 text-white">{author}</h2>
          <h2 className=" text-xs pt-1 text-[#BFCCB5] items-end">
            {updated_at}
          </h2>
        </div>
        <Link target="_parent" to={url}>
          <h2 className="py-2 text-sm truncate text-[#BFCCB5]">{content}</h2>
        </Link>
      </div>
    </div>
  );
};

export default Review