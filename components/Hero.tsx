'use client'

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const hero = useTranslations("Hero");

  const locale = useLocale();

  const router = useRouter();

  return (
    <div
      className="flex flex-row items-center
    justify-center gap-20 mb-10"
    >
        {/* <h2
          className="lg:text-5xl text-3xl font-bold leading-none text-black inline-block
            w-full"
        >
          {hero("heroTitle")}
        </h2> */}

        <div className="flex flex-col justify-start items-start
        gap-7">
          <Button className="heroButtonLearn bg-blue-600 hover:bg-blue-600/95 active:bg-blue-700"
          onClick={() => router.push(`/${locale}/courses/frontend`)}
          >
          <span className="text-3xl font-semibold tracking-wider">{hero('Learn Frontend Development')}</span>
          <span className="text-xl">{hero('learnFrontendWithTech')}</span>
          </Button>

          <Button className="heroButtonLearn bg-yellow-600 hover:bg-yellow-600/95 active:bg-yellow-700"
          onClick={() => router.push(`/${locale}/courses/fullstack`)}
          >
          <span className="text-3xl font-semibold tracking-wider">{hero('Learn Fullstack Development')}</span>
          <span className="text-xl">{hero('learnFullstackWithTech')}</span>
          </Button>
        </div>
      

      <div className="mb-20 mt-44 hidden flex-col lg:mt-12 lg:flex">
        <Image
          src={`/whatsapp ad.png`}
          alt="Hero"
          width={1000}
          height={500}
          className="w-[775px] h-[400px]"
        />
      </div>
    </div>
  );
};

export default Hero;
