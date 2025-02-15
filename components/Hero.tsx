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
      className="mx-auto flex flex-row items-center max-w-[1600px]
    justify-between h-screen"
    >
      <div className="flex flex-col justify-center items-center gap-8 w-full">
        {/* <h2
          className="lg:text-5xl text-3xl font-bold leading-none text-black inline-block
            w-full"
        >
          {hero("heroTitle")}
        </h2> */}

        <div className="w-full flex flex-col justify-start items-start
        ml-3 gap-6">
          <Button className="heroButtonWidth py-11 bg-blue-600 hover:bg-blue-600/95 transition-all duration-100
          text-xl flex flex-col gap-1"
          onClick={() => router.push(`/${locale}/courses/frontend`)}
          >
          <span className="text-3xl font-semibold tracking-wider">{hero('Learn Frontend Development')}</span>
          <span className="text-xl">{hero('learnFrontendWithTech')}</span>
          </Button>

          <Button className="heroButtonWidth py-11 bg-yellow-600 hover:bg-yellow-600/95 transition-all duration-100
          text-xl flex flex-col gap-1"
          onClick={() => router.push(`/${locale}/courses/fullstack`)}
          >
          <span className="text-3xl font-semibold tracking-wider">{hero('Learn Fullstack Development')}</span>
          <span className="text-xl">{hero('learnFullstackWithTech')}</span>
          </Button>
        </div>
      </div>

      <div className="mb-20 mt-44 hidden flex-col lg:mt-12 lg:flex w-full">
        <Image
          src={`/whatsapp ad.png`}
          alt="Hero"
          width={1000}
          height={500}
          className="w-[825px] h-[400px]"
        />
      </div>
    </div>
  );
};

export default Hero;
