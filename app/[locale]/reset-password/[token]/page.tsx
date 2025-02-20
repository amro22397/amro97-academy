
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import Link from "next/link";

import { Label } from "@/components/ui/label";
/* import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select" */
import { redirect, useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";
import ShowPassStrength from "@/components/ShowPassStrength";
import { passwordStrength } from "check-password-strength";
import ResetForm from "../ResetForm";
import { getUser } from "@/actions/getUser";
import { getLocale } from "next-intl/server";


type strength = 0 | 1 | 2 | 3;

const page = async () => {

  const session = await getUser();
  const locale = await getLocale();

  if (session?.user?.email) {
    redirect(`/${locale}/`);
  }
  
  /* useEffect(() => {
      if (session.status === "authenticated") {
        router.push('/');
      }
    }, [session.status, router]); */

  return (
    <div className="flex justify-center items-center
    mb-16">
      <div className="w-full max-w-sm">
      <ResetForm />
      </div>
    </div>
  );
};

export default page;
