"use client";

import React, { useState } from "react";
import "./page.css";
import VideoAndMenu from "@/components/VideoAndMenu";
import { fullstackVideos } from "@/constants/videos/fullstack/nextjs-mongodb";
import { useLocale, useTranslations } from "next-intl";
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

  const locale = useLocale();

  const jFullstackVideos = JSON.parse(JSON.stringify(fullstackVideos))

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

                

                <span className="font-semibold mt-4">
          {fullstackVideosPage("GetMostBenifits")}
          <Link
            href={`/${locale}/single-video?videoId=sCL3dzsQuZ4`}
            target="_blank"
            className="mx-2 text-indigo-700 hover:underline active:text-black/75
            cursor-pointer"
          >
            {fullstackVideosPage("Click here")}
          </Link>
        </span>


              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>


      <VideoAndMenu videos={jFullstackVideos} search={search} />


      <SearchBar setSearch={setSearch} />


      



    </div>
  );
};

export default page;
