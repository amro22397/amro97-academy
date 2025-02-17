/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

import { Navigation } from "../constants/navigation";
import ThemeSwitch from "./ThemeSwitch";
import { usePathname, useRouter } from "next/navigation";
import FlayoutLink from "./FlayoutLink";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Header() {
  const locale = useLocale();

  const header = useTranslations("Header");

  const pathname = usePathname();
  const router = useRouter();

  console.log(pathname.split(locale)[1]);

  let path = pathname.split(locale)[1];

  if (pathname.includes('frontend') && locale === "en") {
    console.log(`${path}${locale}${pathname.split(locale)[2]}`);
    path = `${path}${locale}${pathname.split(locale)[2]}`;
  }

  if (pathname.includes('arabic') && locale === "ar") {
    console.log(`${path}${locale}${pathname.split(locale)[2]}`)
    path = `${path}${locale}${pathname.split(locale)[2]}`
  }

  if (pathname.includes('english') && locale === "en") {
    console.log(`${path}${locale}${pathname.split(locale)[2]}`)
    path = `${path}${locale}${pathname.split(locale)[2]}`
  }


  const handleSelectChange = () => {
    
    if (locale === "ar") {
      router.push(`/en${path}`);
    }
    
    if (locale === "en") {
      router.push(`/ar${path}`)
    }
  }

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

      <div
        className="grotesk mt-0 mb-16 flex items-center justify-between pt-[10.5px] pb-[12px] px-4 sm:mx-0 sm:mb-20 sm:px-0 md:px-14
      w-full z-30 bg-white border-b border-solid border-gray-300/80"
      >
        <div className="mt-0 pb-0 flex flex-row justify-center items-center">
          <Link
            href={`/${locale}/`}
            className="text-3xl font-bold text-black 
          flex flex-row items-center justify-center gap-2"
          >
            <span
              className={`text-[44px] text-blue-600 ${
                locale === "ar" && "order-2 text-[37.5px]"
              }`}
              style={
                locale === "en"
                  ? { fontFamily: "Iceberg" }
                  : { fontFamily: "Readex Pro" }
              }
            >
              {header("amro97")}
            </span>

            <span
              className={`tracking-wide text-[44px] ${
                locale === "ar" && "text-[30px]"
              }`}
              style={
                locale === "en"
                  ? { fontFamily: "Iceberg" }
                  : { fontFamily: "Readex Pro" }
              }
            >
              {header("Academy")}
            </span>
          </Link>

          <ul
            className={`hidden pl-14 align-middle xl:flex mt-[13.5px] ${
              locale === "ar" && "px-4"
            }`}
          >
            {Navigation.map((nav, index) => {
              const path = `/${locale}${nav.href}`;

              return (
                <li key={nav.name}>
                  <FlayoutLink
                    href={`/${locale}${nav.href}`}
                    FlyoutContent={nav?.FlayOutConent}
                    nav={nav}
                  >
                    {locale === "en" ? nav.name : nav.arName}
                  </FlayoutLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className="hidden text-right xl:flex xl:flex-row items-center justify-center gap-6
        mt-2"
        >
          {/* <Link
            className="bg-blue inline-flex items-center px-8 py-3
              hover:bg-blue-700 active:bg-blue-800
              text-lg font-semibold tracking-tighter text-white"
            href="/"
          >
            {header("Contact Us")}
          </Link> */}

          <Link
            className="bg-green-500 inline-flex items-center px-8 py-3
              hover:bg-green-500/95 active:bg-green-600
               text-lg font-semibold tracking-tighter text-white
               mx-[3px]
              "
            href="/"
          >
            {header("Log In")}
          </Link>

          <ThemeSwitch />



          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="w-16 focus:outline-none focus:ring-0 focus:border-none
            border-black/50 border-2">
              <SelectValue placeholder={locale === 'en' ? "EN" : "AR"} />
            </SelectTrigger>
            <SelectContent className="focus:outline-none focus:ring-0 focus:border-none"
            >
              <SelectItem value="english"
              className="focus:bg-gray-100 focus:outline-none focus:ring-0"
              >EN</SelectItem>
              <SelectItem value="arabic"
              className="focus:bg-gray-100 focus:outline-none focus:ring-0
              ">AR</SelectItem>
            </SelectContent>
          </Select>


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
