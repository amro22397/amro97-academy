import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";

const LogOut = ({ email, onClickCloseMobNav }: { 
  email: string | undefined | null | any;
  onClickCloseMobNav?: () => void
 }) => {
  const header = useTranslations("Header");
  const locale = useLocale();

  return (
    <>
      {email && (
        <Link
          className="bg-red-500 inline-flex items-center px-8 py-3
              hover:bg-red-500/95 active:bg-red-600
               text-lg font-semibold tracking-tighter text-white
               mx-[3px]
              "
          href={`#`}
          
          onClick={() => {
            signOut({ callbackUrl: `/${locale}/login` });
            onClickCloseMobNav?.();
          }}
        >
          {header("Log Out")}
        </Link>
      )}
    </>
  );
};

export default LogOut;
