/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

import { Navigation } from "../constants/navigation";
import ThemeSwitch from "./ThemeSwitch";
import { usePathname, useRouter } from "next/navigation";
import FlayoutLink from "./FlayoutLink";

import { FiMenu } from "react-icons/fi";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { signOut } from "next-auth/react";
import ArabicEnglishSelect from "./ArabicEnglishSelect";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import LogIn from "./Authentication/LogIn";
import LogOut from "./Authentication/LogOut";
import CoursesContent from "./FlayoutContent/CoursesContent";
import WebFontsContent from "./FlayoutContent/WebFontsContent";

export default function Header({
  email,
  session,
}: {
  email: string | undefined | null;
  session: any;
}) {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [openCoursesMobileNav, setOpenCoursesMobileNav] = useState(false);
  const [openWebFontsMobileNav, setOpenWebFontsMobileNav] = useState(false);

  const locale = useLocale();

  const header = useTranslations("Header");

  const pathname = usePathname() as string;
  const router = useRouter();

  console.log(pathname.split(locale)[1]);

  console.log(email);

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
        className="grotesk mt-0 mb-16 flex items-center justify-between pt-[10.5px] pb-[12px] px-4 sm:mx-0 sm:mb-20 sm:px-4 md:px-14
      w-full z-30 bg-white border-b border-solid border-gray-300/80 relative"
      >
        <div className="mt-0 pb-0 flex flex-row justify-center items-center">
          <Link
            href={`/${locale}/`}
            className="text-3xl font-bold text-black 
          flex flex-row items-center justify-center xl:gap-2 gap-[3.5px]"
          >
            <span
              className={`xl:text-[44px] text-blue-600 text-[35px] sm:text-[38px] md:sm:text-[40px] ${
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
              className={`xl:text-[44px] tracking-wide text-[35px] sm:text-[38px] md:sm:text-[40px] ${
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
            className={`hidden pl-5 2xl:pl-14 align-middle 2xl:flex mt-[13.5px] ${
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
          className="hidden text-right 2xl:flex 2xl:flex-row items-center justify-center gap-6
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

          <LogIn email={email} />

          <LogOut email={email} />

          

          <ArabicEnglishSelect />

          <ThemeSwitch />
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

        <div className="flex flex-row justify-center items-center gap-5 2xl:hidden">
          

          

          <FiMenu
            size={25}
            className="mt-[3px] hover:text-gray-800 active:scale-95 cursor-pointer"
            onClick={() => setOpenMobileNav(!openMobileNav)}
          />
        </div>

        {openMobileNav && (
          <div
            className="2xl:hidden w-full absolute top-[63px] left-0 bg-white sm:w-[50vw] sm:h-[100vh]
            md:w-[40vw] lg:w-[30vw] py-5 flex flex-col justify-start items-center"
          >
            <IoClose
              size={25}
              className="hover:text-gray-800 active:scale-95 cursor-pointer
            absolute top-3 right-4 "
              onClick={() => setOpenMobileNav(false)}
            />

            <ul
              className={`flex flex-col justify-center items-center gap-1 my-6 ${
                locale === "ar" && "px-4"
              }`}
            >
              {Navigation.map((nav, index) => {
                const path = `/${locale}${nav.href}`;

                return (
                  <>
                    <li key={nav.name}>
                      {/* <FlayoutLink
                      href={`/${locale}${nav.href}`}
                      FlyoutContent={nav?.FlayOutConent}
                      nav={nav}
                    >
                      {locale === "en" ? nav.name : nav.arName}
                    </FlayoutLink> */}

                      <Link
                        href={`${!nav.noCourserPointer ? `/${locale}${nav.href}` : '#'}`}
                        className={`relative text-black hover:text-gray-800 active:scale-95 ${
                          nav.style
                        } ${
                          pathname === path &&
                          path !== `/${locale}/courses/frontend` &&
                          "font-bold hover:text-black/90"
                        }
                    ${nav?.noCourserPointer && "cursor-default"}
                    ${
                      locale === "ar"
                        ? "text-[17px] mx-[16.25px]"
                        : "text-xl mx-[19.5px]"
                    }`}
                        onClick={() => {
                          if (nav.name === "Courses") {
                            setOpenCoursesMobileNav(!openCoursesMobileNav);
                            setOpenWebFontsMobileNav(false);
                            return;
                          }

                          if (nav.name === "Web fonts") {
                            setOpenWebFontsMobileNav(!openWebFontsMobileNav);
                            setOpenCoursesMobileNav(false);
                            return;
                          }

                          setOpenMobileNav(false);
                        }}
                      >
                        {locale === "en" ? nav.name : nav.arName}
                      </Link>

                    </li>
                    
                  </>
                );
              })}
              
            </ul>

            <div className="mb-5 flex flex-row gap-[10px] justify-center items-center"
            dir="ltr">
            <ArabicEnglishSelect onClickCloseMobNav={() => setOpenMobileNav(false)} />

            <ThemeSwitch onClickCloseMobNav={() => setOpenMobileNav(false)} />
            </div>

            <LogIn email={email} onClickCloseMobNav={() => setOpenMobileNav(false)} />

            <LogOut email={email} onClickCloseMobNav={() => setOpenMobileNav(false)} />

            {openCoursesMobileNav && <CoursesContent />}

            {openWebFontsMobileNav && <WebFontsContent />}

          </div>
        )}
      </div>
    </>
  );
}
