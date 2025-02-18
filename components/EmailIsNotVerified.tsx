import { getSession, getUser } from '@/actions/getUser'
import { User } from '@/models/user';
import mongoose from 'mongoose';
import React from 'react'
import IfYouDontRecieve from './IfYouDontRecieve';

const EmailIsNotVerified = async () => {

    const session = await getUser();
    console.log(session?.user)

    // mongoose.connect(process.env.MONGO_URL as string);
    // const user = await User.findOne({ email: session?.user?.email });
    // console.log(user)

  return (
    <>
    {!session?.user?.isVerified && session?.user !== null && session?.user !== undefined && (
      <div className=''>
<div className='bg-red-500 text-white w-full
    flex justify-center text-lg py-1'>
      Your account <span className='mx-1 underline'>is not</span> verified yet. 
      Please check your email for verification link and refresh the page.
    </div>
    <IfYouDontRecieve />
      </div>
        )
    } 
    </>  
  )
}

export default EmailIsNotVerified
