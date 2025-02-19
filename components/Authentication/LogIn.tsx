"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const LogIn = ({ email, onClickCloseMobNav }: { 
  email: string | undefined | null | any;
  onClickCloseMobNav?: () => void
 }) => {
  const header = useTranslations("Header");
  const locale = useLocale();

  return (
    <>
      {!email && (
        <Link
          className="bg-green-500 inline-flex items-center px-8 py-3
              hover:bg-green-500/95 active:bg-green-600
               text-lg font-semibold tracking-tighter text-white
               mx-[3px]
              "
          href={`/${locale}/login`}
          onClick={() => {
            onClickCloseMobNav?.();
          }}
        >
          {header("Log In")}
        </Link>
      )}
    </>
  );
};

export default LogIn;
