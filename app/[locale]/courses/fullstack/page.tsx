'use client'

import React, { useState } from "react";
import './page.css'
import VideoAndMenu from "@/components/VideoAndMenu";
import { fullstackVideos } from "@/constants/videos/fullstackVideos";
import { useTranslations } from "next-intl";
import Link from "next/link";
import VideoAndMenuDesc from "@/components/VideoAndMenuDesc";

const page = () => {

  const fullstackVideosPage = useTranslations("FullstackVideos")

  return (

    <div className="videosPage">
    
    <h1 className="text-black text-3xl font-semibold my-0">
        {fullstackVideosPage("Title")}
      </h1>

      <div className="">

      <p className="text-black my-6 text-center
      flex flex-col items-center gap-1">
      <VideoAndMenuDesc />
      <span className="mb-2 font-semibold">{fullstackVideosPage("GetMostBenifits")} 
        <Link href="" className="mx-2 text-indigo-700 hover:underline active:text-black/75"
        >Click here</Link>
      </span>
      </p>

      </div>
      
    <VideoAndMenu videos={fullstackVideos}
     />

    </div>
  );
};

export default page;
