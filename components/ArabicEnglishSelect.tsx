'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";


const ArabicEnglishSelect = () => {

    const pathname = usePathname() as string;
      const locale = useLocale();
        const router = useRouter();
    

    let path = pathname.split(locale)[1];

  if (pathname.includes('frontend') && locale === "en") {
    console.log(`${path}${locale}${pathname.split(locale)[2]}`);
    path = `${path}${locale}${pathname.split(locale)[2]}`;
  }

  if (pathname.includes('arabic') && locale === "ar") {
    console.log(`${path}${locale}${pathname.split(locale)[2]}`)
    path = `${path}${locale}${pathname.split(locale)[2]}`
  }

  if (pathname.includes('english') && locale === "en") {
    console.log(`${path}${locale}${pathname.split(locale)[2]}`)
    path = `${path}${locale}${pathname.split(locale)[2]}`
  }


  const handleSelectChange = () => {
    
    if (locale === "ar") {
      router.push(`/en${path}`);
    }
    
    if (locale === "en") {
      router.push(`/ar${path}`)
    }
  }

  return (
    <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="w-16 focus:outline-none focus:ring-0 focus:border-none
            border-black/50 border-2">
              <SelectValue placeholder={locale === 'en' ? "EN" : "AR"} />
            </SelectTrigger>
            <SelectContent className="focus:outline-none focus:ring-0 focus:border-none"
            >
              <SelectItem value="english"
              className="focus:bg-gray-100 focus:outline-none focus:ring-0"
              >EN</SelectItem>
              <SelectItem value="arabic"
              className="focus:bg-gray-100 focus:outline-none focus:ring-0
              ">AR</SelectItem>
            </SelectContent>
          </Select>
  )
}

export default ArabicEnglishSelect
