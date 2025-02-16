'use client'

import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { frontendVideos } from "@/constants/videos/frontend/frontendVideos";
import './page.css'
import VideoAndMenu from "@/components/VideoAndMenu";
import { useTranslations } from "next-intl";
import VideoAndMenuDesc from "@/components/VideoAndMenuDesc";

const page = () => {

  const frontendVideosPage = useTranslations("FrontendVideos")

  return (

    <div className="videosPage">
    
    <h1 className="text-black text-3xl font-semibold my-0">
        {frontendVideosPage("Title")}
      </h1>

      <p className="text-black my-6 text-center">
      <VideoAndMenuDesc />
      <span className="">{frontendVideosPage("ApplyAtLeast")}</span>
      </p>
      
    <VideoAndMenu videos={frontendVideos} />

    </div>
  );
};

export default page;
