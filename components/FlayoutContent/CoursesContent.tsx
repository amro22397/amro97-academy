import { AppContext, AppContextType } from "@/context/AppContext";
import { useLocale } from "next-intl";
import Link from "next/link";
import React, { useContext } from "react";

const CoursesContent = () => {
  const locale = useLocale();

  const CoursesContentLinks = [
    {
      name: "Learn Frontend With Projects",
      arName: "مشاريع تصميم الواجهة الأمامية",
      href: "/courses/frontend",
      style: "",
    },

    {
        name: "Learn Fullstack With Projects",
        arName: "مشاريع تصميم الواجهة الكاملة",
        href: "/courses/fullstack",
        style: "",
      },
  ];

  

  return (
    <div
      className="w-[360px] bg-white p-6 shadow-xl
    flex flex-col justify-center items-center gap-2 rounded-md"
    >
      {CoursesContentLinks.map((link, index) => {
        return (
          <Link href={`/${locale}${link.href}`} className={`flyout-links ${link.style}`}
          key={link.name}
        //   onClick={() => setOpen(false)}
          >
            {locale === "en" ? link.name : link.arName}
          </Link>
        );
      })}
    </div>
  );
};

export default CoursesContent;
