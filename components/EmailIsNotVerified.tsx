'use client'

import { getSession, getUser } from "@/actions/getUser";
import { User } from "@/models/user";
import mongoose from "mongoose";
import React from "react";
import IfYouDontRecieve from "./IfYouDontRecieve";

import { useTranslations } from 'next-intl' 
import { Session } from "@/types/session";


const EmailIsNotVerified = ({ session }: {
  session: Session
}) => {
  // const session = await getUser();
  // console.log(session?.user);

  // mongoose.connect(process.env.MONGO_URL as string);
  // const user = await User.findOne({ email: session?.user?.email });
  // console.log(user)

  const emailIsNotVerified = useTranslations('EmailIsNotVerified');


  return (
    <>
      {!session?.user?.isVerified &&
        session?.user !== null &&
        session?.user !== undefined && (
          <div className="">
            <div
              className="bg-red-500 text-white w-full
    lg:flex justify-center text-lg py-1 hidden"
            >
              {emailIsNotVerified('Your account')}<span className="mx-1 underline">{emailIsNotVerified('is not')}</span>{" "}
              {emailIsNotVerified('VerifiedYetPlease')}
            </div>

            <div
              className="bg-red-500 text-white w-full
    lg:hidden justify-center text-lg py-1 flex"
            >
              {emailIsNotVerified('YourAccountIsNot')}
            </div>
            <IfYouDontRecieve />
          </div>
        )}
    </>
  );
};

export default EmailIsNotVerified;
