import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "./Container";
import Menu from "../Component/Menu";
const Center = () => {
  const [text, setText] = useState([]);
  const [video, setVideo] = useState([]);
  const location = useLocation();
  const detailId = location?.state?.id;
  const [review, setReview] = useState([]);
  useEffect(() => {
    apiFetch(), movieFetch(), reviewFetch();
  }, [detailId]);
  const apiFetch = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${detailId}?api_key=a6af80b02b99c9fae32ba3c9259d4844&language=en-US`
    );
    const detailFetch = await data.json();
    setText(detailFetch);
  };
  const movieFetch = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${detailId}/videos?api_key=a6af80b02b99c9fae32ba3c9259d4844&language=en-US`
    );
    const detailsFetch = await data.json();
    const preVideo = detailsFetch?.results;
    setVideo(preVideo);
  };
  const reviewFetch = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${detailId}/reviews?api_key=a6af80b02b99c9fae32ba3c9259d4844&language=en-US&page=1`
    );
    const detailsFetch = await data.json();
    setReview(detailsFetch.results);
  };
  const trailer = video?.find((item) => item.type === "Trailer");
  const clip = video?.find((item) => item.type === "Behind the Scenes");
  const generateUrl = `https://www.youtube.com/embed/${trailer?.key}`;
  const clipUrl = `https://www.youtube.com/embed/${clip?.key}`;
  return (
    <div className=" overflow-hidden">
      <Menu/>
      <Container
        {...text}
        clipUrl={clipUrl}
        userReview={review}
        generateUrl={generateUrl}
      />
    </div>
  );
};

export default Center;
