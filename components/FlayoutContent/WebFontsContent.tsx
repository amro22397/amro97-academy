import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

const WebFontsContent = () => {
  const locale = useLocale();

  const webFontsContentLinks = [
    {
      name: "English Fonts",
      arName: "الخطوط الإنجليزية",
      href: "/web-fonts/english-fonts",
      style: "",
    },

    {
      name: "Arabic Fonts",
      arName: "الخطوط العربية",
      href: "/web-fonts/arabic-fonts",
      style: "",
    },
  ];

  return (
    <div
      className="2xl:w-64 w-full  bg-white p-6 2xl:shadow-xl
    flex flex-col justify-center items-center gap-2 rounded-m"
    >
      {webFontsContentLinks.map((link, index) => {
        return (
          <Link
            href={`/${locale}${link.href}`}
            className={`flyout-links-web-fonts ${link.style}`}
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

export default WebFontsContent;
