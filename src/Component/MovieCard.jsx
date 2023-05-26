import React, { useEffect, useState } from "react";
import { Card, Image, Text } from "@mantine/core";
import { BsStarFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Undraw from "./undraw.png";
import "animate.css";
const MovieCard = ({ id, title, name, backdrop_path, vote_average }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate(`/detail/${id}`, { state: { id } })}>
        <Card
          className="bg-[#454545] hover:scale-[1] scale-[0.9] hover:bg-transparent transition-[0.2s] relative "
          shadow="lg"
          padding="sm"
          component="a"
          style={{ width: "180px" }}
        >
          <Card.Section>
            {backdrop_path == null ? (
              <Image
                src={Undraw}
                height={200}
                width={180}
                className="object-contain mx-auto"
                alt={title}
              />
            ) : (
              <Image
                src={
                  "https://image.tmdb.org/t/p/original" + backdrop_path ||
                  poster_path
                }
                height={200}
                width={180}
                className="object-contain mx-auto"
                alt={title}
              />
            )}
          </Card.Section>

          <Text
            truncate
            className="truncate text-[#FFEAEA] font-bold"
            size="sm"
            mt="sm"
          >
            {title?.substring(0, 25) || name?.substring(0, 25)}
          </Text>
          <div className="flex  items-center justify-between absolute top-2 left-2 bg-[#E21818] px-[6px] py-[2px] rounded-lg text-white">
            <BsStarFill />
            {vote_average?.toFixed(1)}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MovieCard;
