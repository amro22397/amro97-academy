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


  const basics = [
    {
      name: "How to work and have an experience as a developer?",
      arName: " كيف تعمل وتحصل على خبرة عملية كمبرمج؟",
      href: "/work-as-developer",
      style: "",
    },
  ];


  const learnFrontend = [
    {
      name: "Frontend Projects",
      arName: " مشاريع الواجهة الأمامية",
      description: "with React, Next Js, TypeScript, Tailwind CSS",
      href: "/courses/frontend",
      style: "",
    },

    {
      name: "Mini Tutorials",
      arName: " التمارين الصغيرة",
      href: "/courses/frontend/mini-tutorials",
      style: "",
    },
  ];

  const learnFullstack = [
    {
      name: "Next Js & MongoDB",
      arName: "Next Js & MongoDB",
      href: "/courses/fullstack",
      style: "",
    },

    {
      name: "MERN Stack",
      arName: "MERN Stack",
      href: "/courses/fullstack/mern-stack",
      style: "",
    },

    {
      name: "MySQL",
      arName: "MySQL",
      href: "/courses/fullstack/mysql",
      style: "",
    },
  ];

  return (
    <div
      className="w-[550px] bg-white p-6 shadow-xl
    flex flex-col justify-center items-start gap-4 rounded-md"
    >


      <div className="flex flex-col justify-center items-start gap-[5px]
      mt-2">
        {/* <h3 className="text-lg font-bold text-left">
          {locale === "en" ? "Learn Frontend" : "كورسات الواجهة الأمامية"}
        </h3> */}

        <div className="flex flex-col gap-2 mx-7">
          {basics.map((link, index) => {
            return (
              <div className="flex flex-col justify-center items-center gap-0">
                <Link
                  href={`/${locale}${link.href}`}
                  className={`text-[17.5px] hover:underline hover:text-black/85 active:scale-95 tracking-wide ${link.style}`}
                  key={link.name}
                  //   onClick={() => setOpen(false)}
                >
                  {locale === "en" ? link.name : link.arName}
                </Link>

                {/* <span className="text-[16px] w-full text-gray-600 tracking-wide leading-[22px]">
                  {link.description}
                </span> */}
              </div>
            );
          })}
        </div>
      </div>



      <div className="flex flex-col justify-center items-start gap-[5px]">
        <h3 className="text-lg font-bold text-left">
          {locale === "en" ? "Learn Frontend" : "كورسات الواجهة الأمامية"}
        </h3>

        <div className="flex flex-col gap-2 mx-7">
          {learnFrontend.map((link, index) => {
            return (
              <div className="flex flex-col justify-center items-start gap-0">
                <Link
                  href={`/${locale}${link.href}`}
                  className={`flyout-links ${link.style}`}
                  key={link.name}
                  //   onClick={() => setOpen(false)}
                >
                  {locale === "en" ? link.name : link.arName}
                </Link>

                <span className="text-[16px] w-full text-gray-800 tracking-wide leading-[22px]">
                  {link?.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col justify-center items-start gap-[5px]">
        <h3 className="text-lg font-bold text-left">
          {locale === "en" ? "Learn Fullstack" : "كورسات الواجهة الكاملة"}
        </h3>

        <div className="flex flex-col gap-2 mx-7">
          {learnFullstack.map((link, index) => {
            return (
              <Link
                href={`/${locale}${link.href}`}
                className={`flyout-links ${link.style}`}
                key={link.name}
                //   onClick={() => setOpen(false)}
              >
                {locale === "en" ? link.name : link.arName}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoursesContent;
