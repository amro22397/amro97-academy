import { getSession, getUser } from "@/actions/getUser";
import { LoginForm } from "@/components/login-form"
import { getLocale } from "next-intl/server";
import { redirect } from "next/navigation";

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
        <LoginForm /> 
      </div>
    </div>
  )
}
