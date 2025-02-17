"use client";

import React, { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { frontendVideos } from "@/constants/videos/frontend/frontendVideos";
// import './page.css'
import { Video } from "@/types/videos";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const VideoAndMenu = ({
  videos,
  search,
}: {
  videos: Video[];
  search?: string | undefined | null;
}) => {
  const firstVideoId = videos[0]?.youtubeLink?.split("=")[1];
  console.log(firstVideoId);

  const [showingVideo, setShowingVideo] = useState<Video>(
    JSON.parse(localStorage?.getItem("showingVideo")) || videos[0] || {}
  );

  const [videoId, setVideoId] = useState(
    localStorage.getItem("videoId") || firstVideoId
  );

  const [openLearningMode, setOpenLearningMode] = useState(false);

  const [videoUrl, setVideoUrl] = useState(
    localStorage.getItem("videoUrl") || videos[0]?.youtubeLink || ""
  );

  const filteredVideos = videos.filter((video: Video, index: number) =>
    [video.title, video.type, video.notes, video.description].some(
      (field: string | any) =>
        field?.toLowerCase().includes(search?.toLowerCase() || "")
    )
  );

  const [duration, setDuration] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const SCROLL_KEY = "scroll-position"; // Key for local storage

  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollTop = scrollRef.current.scrollTop;
      setScrollPos(scrollTop);
      localStorage.setItem(SCROLL_KEY, scrollTop.toString());
    }
  };

  useEffect(() => {
    const savedScrollPos = localStorage.getItem(SCROLL_KEY);
    if (savedScrollPos && scrollRef.current) {
      scrollRef.current.scrollTop = parseInt(savedScrollPos, 10);
    }
  }, []);

  const fetchDuration = async () => {
    setError(null);
    setDuration(null);

    try {
      const response = await fetch(
        `/api/getVideoDuration?videoUrl=${encodeURIComponent(videoUrl)}`
      );
      const data = await response.json();

      console.log(data);

      if (data.error) {
        setError(data.error);
      } else {
        setDuration(data.duration);
      }
    } catch (err) {
      setError("Failed to fetch video duration");
    }
  };

  useEffect(() => {
    fetchDuration();
    console.log(duration);
  }, [videoUrl]);

  const videoAndMenu = useTranslations("VideoAndMenu");

  function capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  const locale = useLocale();

  return (
    <div className="flex flex-col items-center justify-center mb-10">


      {showingVideo?.notes && locale === "en" ? (
        <div className={`video-notes mb-6
          ${!showingVideo?.notes && locale !== "en" && "hidden"}`}>{showingVideo?.notes}</div>
      ) : (
        <div className={`video-notes mb-6
          ${!showingVideo?.arNotes && locale !== "ar" && "hidden"}`}>{showingVideo?.arNotes}</div>
      )}


      <div
        className="flex flex-row items-center justify-center
    gap-20"
      >
        <ScrollArea
          className="p-5 h-[50vh] rounded-md border
      bg-gray-200/75 w-[450px]"
          ref={scrollRef}
          onScroll={handleScroll}
          key={videos.length}
        >
          {filteredVideos.map((video: Video, index: number) => (
            <>
              <div
                className="w-full text-center text-[16.5px] font-semibold cursor-pointer 
          hover:text-gray-800 active:scale-95
          my-[4px] tracking-wide"
                key={video.title}
                onClick={() => {
                  setVideoUrl(video.youtubeLink);
                  localStorage.setItem("videoUrl", video.youtubeLink);
                  setVideoId(video.youtubeLink.split("=")[1]);
                  localStorage.setItem(
                    "videoId",
                    video.youtubeLink.split("=")[1]
                  );
                  setShowingVideo(video);
                  localStorage.setItem("showingVideo", JSON.stringify(video));
                }}
              >
                <h1
                  className={`${
                    video?.category === "additional" &&
                    "text-gray-600 hover:text-gray-700 active:scale-95"
                  }`}
                >
                  {capitalizeFirstLetter(video.title)}
                </h1>
              </div>

              <div className="flex flex-row justify-between items-center mx-2">
                <div className="">
                  <span className="font-semibold text-blue-600">
                    {video?.type}
                  </span>
                </div>

                <div className="flex flex-row items-center justify-end gap-[11px]">
                  {/* <button
                  className="text-[15.5px] font-semibold
            tracking-wide active:scale-95 text-stone-600 hover:text-stone-700
            rounded-full"
                  style={{ fontFamily: "Arial" }}
                >
                  {videoAndMenu("Learning mode")}
                </button> */}

                  <span
                    className="font-semibold text-yellow-600"
                    style={{ fontFamily: "Arial" }}
                  >
                    {locale === "en"
                      ? capitalizeFirstLetter(video?.category)
                      : video?.arCategory}
                  </span>
                </div>
              </div>

              {index !== filteredVideos.length - 1 && (
                <Separator
                  className="my-2 bg-gray-400/65"
                  key={video.youtubeLink}
                />
              )}
            </>
          ))}
        </ScrollArea>

        <div className="flex flex-col gap-3 justify-center items-end">
          <iframe
            className="w-[700px] h-[400px]"
            src={`https://www.youtube.com/embed/${videoId}?si=-Q9f2kd-cDd-brrF`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <div className="flex flex-row justify-between items-center w-full">
            <Link
              href={""}
              className="mx-[7.5px] text-black hover:underline active:text-black/85
          cursor-pointer"
            >
              {videoAndMenu("ApplyWithLearningHow")}
            </Link>

            <Button
              className="text-[15.5px] font-semibold rounded-none
            tracking-wide active:scale-95 text-white hover:bg-green-500
            cursor-pointer px-3"
              style={locale === "en" ? { fontFamily: "Arial" } : {}}
              onClick={() => setOpenLearningMode(true)}
            >
              {videoAndMenu("Learning mode")}
            </Button>
          </div>
        </div>

        {openLearningMode && (
          <div className="h-screen w-screen fixed z-40 top-0 left-0 bg-black/45 flex flex-col items-center justify-center">
            {/* <IoIosCloseCircle
            className="absolute top-3 right-[50%] text-black hover:text-black active:scale-95
          cursor-pointer z-50"
            onClick={() => setOpenLearningMode(false)}
            size={60}
          /> */}

            {/* <Button className="absolute top-3 right-[45%] text-white active:scale-95
          cursor-pointer z-50 bg-red-500 hover:bg-red-500/95 font-semibold tracking-wide
          rounded-full "
          style={{fontFamily: 'Arial'}}>
            
          </Button> */}

            <IoMdClose
              className="text-5xl px-3 py-1 absolute bottom-4 right-6 text-white active:scale-95
          cursor-pointer z-50 bg-red-500/95 hover:bg-red-600 font-semibold tracking-wide rounded-full"
              size={50}
              onClick={() => setOpenLearningMode(false)}
            />

            <iframe
              className="w-[100%] h-[100vh]"
              src={`https://www.youtube.com/embed/${videoId}?si=-Q9f2kd-cDd-brrF`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoAndMenu;
