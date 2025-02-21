"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useActionState, useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { EyeIcon, EyeOffIcon, Loader, Loader2 } from "lucide-react";
// import { CircularProgress } from "@mui/material";
/* import { Register } from "@/actions/actions"
import { parseWithZod } from "@conform-to/zod"
import { loginSchema } from "@/lib/zodSchemas"
import { z } from "zod"
import { useForm } from "react-hook-form" */
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import type { Control, FieldPath } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation";
import ShowPassStrength from "./ShowPassStrength";
import { passwordStrength } from "check-password-strength";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

type strength = 0 | 1 | 2 | 3;

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState<strength>(0);

  const [type, setType] = useState("password");
  const [validation, setValidation] = useState(false);

  const [passwordFocused, setPasswordFocused] = useState(false);
  const [passwordValidity, setPasswordValidity] = useState({
    minChar: null,
    number: null,
    specialChar: null,
  });

  const router = useRouter();
  const locale = useLocale();

  const handleValidation = (value: string) => {
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");

    if (
      lower.test(value) &&
      upper.test(value) &&
      number.test(value) &&
      special.test(value)
    ) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  };

  // const [lastResult, action] = useActionState(Register, undefined);

  /* const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  }) */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignWithGoogle = async (e: any) => {
    e.preventDefault();

    setLoadingGoogle(true);

    await signIn("google", { callbackUrl: `/${locale}/` });

    setLoadingGoogle(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    if (formData.password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Passwords do not match",
      });
      setLoading(false);
      return;
    }

    if (formData.name.length < 3) {
      toast({
        variant: "destructive",
        title: "User name cannot be less than 3 characters",
      });
      setLoading(false);
      return;
    } else if (formData.name.length > 25) {
      toast({
        variant: "destructive",
        title: "User name cannot be more than 25 characters",
      });
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      toast({
        variant: "destructive",
        title: "Password cannot be less than 6 characters",
      });
      setLoading(false);
      return;
    } else if (formData.password.length > 20) {
      toast({
        variant: "destructive",
        title: "Password cannot be more than 20 characters",
      });
      setLoading(false);
      return;
    }

    // if (!validation) {
    //   toast({
    //     variant: "destructive",
    //     title: "Passwords need to meet the requirements above",
    //   });
    //   setLoading(false);
    //   return;
    // }

    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");

    if (!lower.test(formData.password)) {
      toast({
        variant: "destructive",
        title: "Password must contain at least one lowercase letter (asdfghjkl)",
        description: "",
        });
        setLoading(false);
        return;
    }

    if (!upper.test(formData.password)) {
      toast({
        variant: "destructive",
        title: "Password must contain at least one highercase letter (ASDFGHJKL)",
        description: "",
        });
        setLoading(false);
        return;
    }

    if (!number.test(formData.password)) {
      toast({
        variant: "destructive",
        title: "Password must contain at least one number (1234567890)",
        description: "",
        });
        setLoading(false);
        return;
    }

    if (!special.test(formData.password)) {
      toast({
        variant: "destructive",
        title: "Password must contain at least one special letter (!@#$%^&*)",
        description: "",
        });
        setLoading(false);
        return;
    }

    const res = await axios.post("/api/register", {...formData, locale});

    try {
      if (!res.data.success) {
        toast({
          variant: "destructive",
          title: `${res.data.message}`,
        });
        setLoading(false);
      }

      if (res.data.success) {
        toast({
          className: "bg-green-500 text-white",
          title: "Account created successfully",
        });

        signIn("credentials", { ...formData, callbackUrl: `/${locale}/` });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: `${error}`,
      });
    }

    setLoading(false);
  };

  const onChangePassword = (password: string) => {};

  useEffect(() => {
    setStrength(passwordStrength(formData.password).id as strength);
  });

  const formStyles = `text-md`;
  const iconClass = `absolute right-4 top-[10.5px] text-gray-500 cursor-pointer`;

  // const session = useSession();
  // console.log(session);

  const registerPage = useTranslations('RegisterPage');


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{registerPage('Register')}</CardTitle>
          <CardDescription className="text-gray-600">
          {registerPage('EnterDetailsRegister')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-1">
                <Label htmlFor="email" className={`${formStyles}`}>
                {registerPage('User name')}
                </Label>
                <Input
                  id="name"
                  type="name"
                  placeholder=""
                  defaultValue={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className={`${formStyles}`}>
                {registerPage('Email')}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  defaultValue={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2 w-[100%]">
                <Label htmlFor="password" className={`${formStyles}`}>
                {registerPage('Password')}
                </Label>

                <div className="relative w-[100%]">
                  <Input
                    id="password"
                    type={type}
                    defaultValue={formData.password}
                    onChange={(e) => {
                      handleChange(e);
                      handleValidation(e.target.value);
                      onChangePassword(e.target.value);
                    }}
                    required
                  />

                  {type === "password" && formData.password ? (
                    <span
                    className={`${locale === "en" ? "icon-class" : "icon-class-ar"}`}
                      onClick={() => setType("text")}
                    >
                      <EyeIcon className="w-5 h-5" />
                    </span>
                  ) : (
                    type === "text" &&
                    formData.password && (
                      <span
                      className={`${locale === "en" ? "icon-class" : "icon-class-ar"}`}
                        onClick={() => setType("password")}
                      >
                        <EyeOffIcon className="w-5 h-5" />
                      </span>
                    )
                  )}
                </div>

                {false && (
                  <div
                  className={`${
                    validation || formData.password.trim() === ""
                      ? "hidden"
                      : "flex"
                  } text-sm text-red-500`}
                >
                  {registerPage('AtLeastOneLowercase1')}<br /> {registerPage('AtLeastOneLowercase2')}
                </div>
                )}

              </div>

              {formData.password.trim() !== "" && (
                <div className="-mt-[10px]">
                  <ShowPassStrength strength={strength} />
                </div>
              )}

              <div className="grid gap-2">
                <Label htmlFor="email" className={`${formStyles}`}>
                {registerPage('Confirm password')}
                </Label>
                <Input
                  id="confirm-password"
                  type={type}
                  placeholder=""
                  defaultValue={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full bg-green-500 hover:bg-green-500/95 active:bg-green-500/90 text-white">
                  {loading ? <Loader2 className="animate-spin" /> : registerPage('RegisterButton')}
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleSignWithGoogle}
                  type="button"
                >
                  {loadingGoogle ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      <Image
                        src={"/Google_Icons-09-512.webp"}
                        width={24}
                        height={24}
                        alt="Google logo"
                      />
                      {registerPage('Continue With Google')}
                    </>
                  )}
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
            {registerPage('Already have an account?')}{" "}
              <Link href={`/${locale}/login`} className="hover:underline active:text-gray-800 underline-offset-4">
              {registerPage('Sign In')}
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
