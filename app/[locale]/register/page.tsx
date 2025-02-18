
import { getSession, getUser } from "@/actions/getUser";
import { RegisterForm } from "@/components/register-form"
import { getLocale } from "next-intl/server";
import { redirect } from "next/navigation";
// import { useSession } from "next-auth/react"
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

export default async function Page() {

  const session = await getUser();
  const locale = await getLocale();
    
      console.log(session);
    
    
        if (session?.user?.email) {
          redirect(`/${locale}/`);
        }



  return (
    <div className="flex w-full items-center justify-center p-6 md:p-10
    mb-[88px]">
      <div className="w-full max-w-sm">
        <RegisterForm />
      </div>
    </div>
  )
}
