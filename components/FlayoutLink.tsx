"use client";

import { Navigation } from "@/types/navigations";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useState } from "react";

import { AnimatePresence, motion } from "framer-motion"
import { AppContext, AppContextType } from "@/context/AppContext";

const FlayoutLink = ({
  children,
  href,
  FlyoutContent,
  nav,
}: {
  children?: React.ReactNode;
  href: string;
  FlyoutContent?: React.ReactNode;
  nav: Navigation;
}) => {
  console.log(children);

  const pathname = usePathname();

//   const { open
//     , setOpen } = useContext(AppContext) as AppContextType;


  const [open, setOpen] = useState(false);

  const showFlyout = open && FlyoutContent;

  const locale = useLocale();

  const path = `/${locale}${nav.href}`;

  return (
    <Link
      href={!nav.noCourserPointer ? href : '#'}
      className={`relative mx-[19.5px] text-black hover:text-gray-800 active:scale-95 ${
        nav.style
      } ${pathname === path && path !== `/${locale}/courses/frontend` && "font-bold hover:text-black/90"}
      ${nav?.noCourserPointer && "cursor-default"}
      ${locale === 'ar' ? 'text-[17px]' : 'text-xl'}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}

      {/* <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-[2px] origin-left scale-x-0 rounded-full bg-black/60 transition-transform duration-300 ease-out"
        /> */}

      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            {FlyoutContent}
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
};

export default FlayoutLink;
