"use client";

import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const page = () => {
  const [openLearningMode, setOpenLearningMode] = useState(false);

  const videoAndMenu = useTranslations("VideoAndMenu");

  const singleVideo = useTranslations("SingleVideoPage");

  const locale = useLocale();

  const queries = useSearchParams();
  
  const videoId = queries?.get("videoId");

  const jVideoId = JSON.parse(JSON.stringify(videoId))

  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <div className="flex flex-col gap-3 justify-center items-end">
        <iframe
          className="xl:w-[1250px] w-[100vw] xl:h-[635px] h-[300px] sm:h-[350px] md:h-[400px]"
          src={`https://www.youtube.com/embed/${jVideoId}?si=-Q9f2kd-cDd-brrF`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <Button
          className="text-[15.5px] font-semibold rounded-none
            tracking-wide active:scale-95 text-white hover:bg-green-500
            cursor-pointer px-3"
          style={locale === "en" ? { fontFamily: "Arial" } : {}}
          onClick={() => setOpenLearningMode(true)}
        >
          {singleVideo("Full Page Screen")}
        </Button>

        <div className="flex flex-row justify-between items-center w-full">
          {/* <Link
              href={""}
              className="mx-[7.5px] text-black hover:underline active:text-black/85
          cursor-pointer"
            >
              {videoAndMenu("ApplyWithLearningHow")}
            </Link> */}
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
            src={`https://www.youtube.com/embed/${jVideoId}?si=-Q9f2kd-cDd-brrF`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default page;
