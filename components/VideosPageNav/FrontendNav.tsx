'use client'

import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const FrontendNav = () => {
  const frontednNavLinks = [
    {
      name: "Frontend Projects",
      arName: "مشاريع الواجهة الأمامية",
      href: "",
      style: "",
    },

    {
        name: "Mini Tutorials",
        arName: "التمارين الصغيرة",
        href: "/mini-tutorials",
        style: "",
      },
  ];

  const locale = useLocale();

  const pathname = usePathname();

  return (
    <div className="w-full shadow-sm top-20 border-b-[1px] pt-4 my-[38.10px]
    md:px-0 px-5">
      <div
        className="
    max-w-[1920px]
    mx-auto
    xl:px-20
    md:px-2
    px-0"
      >
        <div
          className="flex flex-row items-center justify-between md:justify-center 
        gap-8 md:gap-12 overflow-x-auto flex-nowrap"
        >
          {frontednNavLinks.map((link, index) => {
            const path = `/${locale}/courses/frontend${link.href}`;

            return (
              <Link href={`/${locale}/courses/frontend${link.href}`}
              key={link.name}>
                <div
                  className={`flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer ${
                    path === pathname
                      ? "border-b-slate-800 text-slate-800"
                      : "border-transparent text-slate-500"
                  }`}
                >
                  <div className="font-medium text-[18px] text-center break-normal">
                    {locale === "en" ? link.name : link.arName}
                  </div>
                </div>
              </Link>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default FrontendNav;
