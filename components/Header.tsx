/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Navigation } from '../constants/navigation'
import { Button } from "@/components/ui/button"


export default function Header() {
  const locale = useLocale();

  const header = useTranslations('Header');

  return (
    <>
      {/* <div
        className="
        bg-blue
        grotesk
        absolute
        top-0
        h-7
        w-full 
        text-center
        text-sm
        leading-6
        text-white
      "
      >
        Scelerisque egestas et euismod.
        <a href="/" className="pl-3 underline">
          Take me there
        </a>
      </div> */}

      <div className="grotesk mt-0 mb-16 flex items-center justify-between pt-[10.5px] pb-[12px] px-4 sm:mx-0 sm:mb-20 sm:px-0 md:px-14
      fixed top-0 left-0 w-full z-50 bg-white border-b border-solid border-gray-300/80">
        <div className="mt-0 pb-0 flex flex-row justify-center items-center">
          <Link
            href="/"
            className="text-3xl font-bold text-black 
          flex flex-row items-center justify-center gap-1"
          >
            <span
              className="tracking-wider text-3xl"
              style={locale === "en" ? { fontFamily: "Poppins" } : {}}
            >
              {header('amro97')}
            </span>

            <span
              className="tracking-wide text-[44px]"
              style={locale === "en" ? { fontFamily: "Iceberg" } : {}}
            >
              {header('Academy')}
            </span>
          </Link>

          <div className="hidden pl-14 align-middle xl:flex mt-[13.5px]">
            {Navigation.map((nav, index) => (
              <Link href={`/${locale}${nav.href}`} key={nav.name}
              className={`mx-[19.5px] text-xl text-black hover:text-gray-800 active:scale-95
               ${nav.style}`}>
              {locale === "en" ? nav.name : locale === 'ar' && nav.arName}
            </Link>
            ))}
            
          </div>
        </div>


        <div className="hidden text-right xl:flex xl:flex-row gap-6">
          <Link
              className="bg-blue mt-2 inline-flex items-center px-8 py-3
              hover:bg-blue-700 active:scale-95
              text-lg font-semibold tracking-tighter text-white"
              href="/"
            >
              {header('Contact Us')}
            </Link>

          <Link
              className="bg-green-500 mt-2 inline-flex items-center px-8 py-3
              hover:bg-green-400 active:scale-95
               text-lg font-semibold tracking-tighter text-white
              "
              href="/"
            >
              {header('Log In')}
            </Link>
            
          </div>


        <div className="items-center hidden">
          


          <button className="pr-12 pl-4 hidden">
            <svg
              className="mr-auto inline-block text-black xl:hidden"
              width="33"
              height="50"
              viewBox="0 0 23 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.892578 10.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M0.892578 18.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M22.1066 14.8688H0.893399"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
