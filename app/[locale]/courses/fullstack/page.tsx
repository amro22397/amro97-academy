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

const page = () => {
  const fullstackVideosPage = useTranslations("FullstackVideos");

  return (
    <div className="videosPage">
      <div className="flex flex-col items-center justify-center gap-3 my-[32.25px]">

        <h1 className="text-black text-3xl font-semibold">
          {fullstackVideosPage("Title")}
        </h1>

        <span className="font-semibold">
          {fullstackVideosPage("GetMostBenifits")}
          <Link
            href=""
            className="mx-2 text-indigo-700 hover:underline active:text-black/75"
          >
            Click here
          </Link>
        </span>

      </div>

      <VideoAndMenu videos={fullstackVideos} />

      <Accordion
        type="single"
        collapsible
        className="bg-neutral-200/75 px-4 w-[50%]"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
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


      
    </div>
  );
};

export default page;
