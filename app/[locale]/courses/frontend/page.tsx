'use client'

import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { frontendVideos } from "@/constants/videos/frontend/frontendVideos";
import './page.css'
import VideoAndMenu from "@/components/VideoAndMenu";
import { useTranslations } from "next-intl";
import VideoAndMenuDesc from "@/components/VideoAndMenuDesc";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SearchBar from "@/components/SearchBar";


const page = () => {

  const frontendVideosPage = useTranslations("FrontendVideos")

  const [search, setSearch] = useState<string | undefined | null>("");

  console.log(search)

  return (

    <div className="videosPage">
    
    {/* <h1 className="text-black text-3xl font-semibold my-8">
        {frontendVideosPage("Title")}
      </h1> */}



      <Accordion
        type="single"
        collapsible
        className="accordion"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="accordion-trigger">
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
      </Accordion>



      
    <VideoAndMenu videos={frontendVideos} search={search} />



    <SearchBar setSearch={setSearch} />

    


    </div>
  );
};

export default page;
