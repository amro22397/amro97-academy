"use client";

import React, { useState } from "react";
import "./page.css";
import VideoAndMenu from "@/components/VideoAndMenu";
import { fullstackVideos } from "@/constants/videos/fullstackVideos";
import { useTranslations } from "next-intl";
import Link from "next/link";
import VideoAndMenuDesc from "@/components/VideoAndMenuDesc";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SearchBar from "@/components/SearchBar";

const page = () => {
  const fullstackVideosPage = useTranslations("FullstackVideos");

  const [search, setSearch] = useState<string | undefined | null>("");

  return (
    <div className="videosPage">
      <div className="flex flex-col items-center justify-center gap-3">

        {/* <h1 className="text-black text-3xl font-semibold">
          {fullstackVideosPage("Title")}
        </h1> */}

      </div>


      <Accordion
        type="single"
        collapsible
        className="accordion"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="accordion-trigger">
            {fullstackVideosPage("GuideForApplying")}
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-[16px]">
              <p
                className="text-black my-6 text-center
      flex flex-col items-center gap-1"
              >
                <VideoAndMenuDesc />
                <span className="">{fullstackVideosPage("ApplyAtLeast")}</span>
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>


      <VideoAndMenu videos={fullstackVideos} search={search} />


      <SearchBar setSearch={setSearch} />



      <span className="font-semibold mb-[11.5px]">
          {fullstackVideosPage("GetMostBenifits")}
          <Link
            href=""
            className="mx-2 text-indigo-700 hover:underline active:text-black/75
            cursor-pointer"
          >
            {fullstackVideosPage("Click here")}
          </Link>
        </span>


      



    </div>
  );
};

export default page;
