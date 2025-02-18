import { getSession } from "@/actions/getUser";
import ForgetForm from "@/components/ForgetForm";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {

    

    const session = await getSession();
      
        console.log(session);
      
      
          if (session?.user?.email) {
            redirect('/');
          }
        

  return (
    <div className="flex w-full items-center justify-center p-6 md:p-10
    mb-[88px]">
          <div className="w-full max-w-sm">
          <ForgetForm session={session} />
          </div>
        </div>
  )
}

export default page
