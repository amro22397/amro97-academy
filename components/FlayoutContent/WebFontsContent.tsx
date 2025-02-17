import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

const WebFontsContent = () => {
  const locale = useLocale();

  return (
    <div
      className="w-64 bg-white p-6 shadow-xl
    flex flex-col justify-center items-center gap-2 rounded-m"
    >
      <Link
        href={`/${locale}/courses/frontend`}
        className="flyout-links-web-fonts"
      >
        English Fonts
      </Link>

      <Link
        href={`/${locale}/courses/fullstack`}
        className="flyout-links-web-fonts"
      >
        Arabic Fonts
      </Link>
    </div>
  );
};

export default WebFontsContent;
