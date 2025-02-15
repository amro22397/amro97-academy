'use client'

import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { frontendVideos } from "@/constants/frontendVideos";
// import './page.css'
import { Video } from "@/types/videos";


const VideoAndMenu = ({ videos }: {
    videos: Video[];
}) => {

    const firstVideoId = videos[0].youtubeLink.split('=')[1];
      console.log(firstVideoId)
    
      const [videoId, setVideoId] = useState(localStorage.getItem('videoId') || firstVideoId);
    
      function capitalizeFirstLetter(text: string) {
        return text.charAt(0).toUpperCase() + text.slice(1);
      }


  return (
    <div
      className="h-screen flex flex-row items-center justify-between
    mx-80"
    >
      <ScrollArea className="p-5 min-h-[50vh] rounded-md border
      bg-gray-200/75 w-[450px]">
        {videos.map((video, index) => (
          <>
          <div className="w-full text-center text-lg font-semibold cursor-pointer 
          hover:text-gray-800 active:scale-95 transition-all duration-100"
          key={video.title}
          onClick={() => {
            setVideoId(video.youtubeLink.split('=')[1]);
            localStorage.setItem('videoId', video.youtubeLink.split('=')[1]) 
          }}
          >
            <h1>
            {capitalizeFirstLetter(video.title)}
            </h1>
          </div>

           {index !== videos.length -1 && (
            <Separator className="my-2 bg-gray-400/65"
            key={video.youtubeLink} />
           )}
          </>
        ))}
      </ScrollArea>

      <iframe className="w-[700px] h-[450px]" src={`https://www.youtube.com/embed/${videoId}?si=-Q9f2kd-cDd-brrF`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoAndMenu
