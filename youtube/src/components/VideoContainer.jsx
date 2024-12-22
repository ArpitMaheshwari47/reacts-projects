import React from "react";
import { useEffect } from "react";
import { YOUTUBE_VIDEOS } from "../utilis/Constants";
import { useState } from "react";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS);
    const res = await data.json();
    console.log("res", res);
    setVideoData(res.items);
  };
  return (
    <div className="flex flex-wrap">
      {videoData.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
