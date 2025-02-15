'use client'

import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { frontendVideos } from "@/constants/frontendVideos";
import './page.css'
import VideoAndMenu from "@/components/VideoAndMenu";

const page = () => {

  return (
    <VideoAndMenu videos={frontendVideos} />
  );
};

export default page;
