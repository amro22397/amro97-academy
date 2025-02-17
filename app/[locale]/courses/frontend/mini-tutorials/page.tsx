'use client'

import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { frontendVideos } from "@/constants/videos/frontend/frontendVideos";
import VideoAndMenu from "@/components/VideoAndMenu";
import { useTranslations } from "next-intl";
import VideoAndMenuDesc from "@/components/VideoAndMenuDesc";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { miniTutorials } from "@/constants/videos/frontend/mini-tutorials";


const page = () => {

  const miniTutorialsVideosPage = useTranslations("MiniTutorialsVideos")

  return (

    <div className="videosPage">
    
    {/* <h1 className="text-black text-3xl font-semibold my-8">
        {frontendVideosPage("Title")}
      </h1> */}
      
    <VideoAndMenu videos={miniTutorials} />



    
    {/* <Accordion
        type="single"
        collapsible
        className="bg-neutral-200/75 px-4 w-[50%]"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-[18.25px] tracking-wide">
            {frontendVideosPage("GuideForApplying")}
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-[16.75px] tracking-wide">
              <p
                className="text-black my-6 text-center
      flex flex-col items-center gap-1"
              >
                <VideoAndMenuDesc />
                <span className="">{frontendVideosPage("ApplyAtLeast")}</span>
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}


    </div>
  );
};

export default page;
