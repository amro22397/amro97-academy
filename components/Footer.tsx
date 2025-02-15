'use client'

/* eslint-disable @next/next/no-html-link-for-pages */

import {
  useLocale,
  useTranslations,
} from 'next-intl';
import Link from 'next/link';

import { Navigation } from '@/constants/navigation';

export default function Footer() {

  const locale = useLocale();


  const legal = [
    {
      name: "Terms",
      arName: "الشروط",
      style: '',
    },
    {
      name: "Privacy",
      arName: "الخصوصية",
    },
    {
      name: "Legal",
      arName: "القانونية",
    },
  ]



  const Twitter = ({ size = 24 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
    </svg>
  );
  
  const Facebook = ({ size = 24 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
    </svg>
  );
  const Instagram = ({ size = 24 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
    </svg>
  );
  
  const Linkedin = ({ size = 24 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
    </svg>
  );


  const footer = useTranslations('Footer')

  return (
    <>
      <footer className="grotesk bg-[#f9fbfb]">
        <div className="border border-black/15 max-w-8xl mx-auto my-6"></div>
        <div className="max-w-8xl mx-auto text-black">
          <div className="flex flex-row justify-center items-center pb-12 pt-1
          gap-36">


          <div className="flex flex-col items-center">
            <div>{footer("Follow us")}</div>
            <div className="flex mt-4 gap-5 text-gray-400 dark:text-gray-50">
              <Link
                href=""
                target="_blank"
                rel="noopener"
                className={`social-class-name`}
              >
                <span className="sr-only">Facebook</span>
                <Facebook />
              </Link>
              <Link
                href=""
                target="_blank"
                rel="noopener"
                className={`social-class-name`}
              >
                <span className="sr-only">Instagram</span>
                <Instagram />
              </Link>
              <Link href="" target="_blank" rel="noopener" className={`social-class-name`}>
                <span className="sr-only">Linkedin</span>
                <Linkedin />
              </Link>
              <Link
                href=""
                target="_blank"
                rel="noopener"
                className={`social-class-name`}
              >
                <span className="sr-only">Twitter</span>
                <Twitter />
              </Link>
            </div>
          </div>


          <div className="flex flex-col items-center text-center">
              {/* <h2 className="mb-3 text-lg tracking-widest">Et.</h2> */}
              <div className="list-none space-y-2 py-3">
                {Navigation.map((nav: any, index: any) => (
                  <li key={index}>
                  <Link href={`/${locale}${nav.href}`}
                  className={`${nav.style} text-black hover:underline active:scale-95`}
                  >
                    {locale === "en" ? nav.name : locale === 'ar' && nav.arName}
                  </Link>
                </li>
                ))}
                
              </div>
            </div>


            <div className="flex flex-col items-center text-center">
              {/* <h2 className="mb-3 text-lg tracking-widest">Est.</h2> */}
              <nav className="list-none space-y-2 py-3">
                {legal.map((item, index) => (
                  <li key={index}>
                  <Link href={`/${locale}/`}
                  className={`text-black hover:underline active:scale-95 ${item?.style}`}>
                  {locale === 'ar' ? item.arName : item.name}
                  </Link>
                </li>
                ))}
                {/* <li>
                  <a href="/">Vitae nec.</a>
                </li>
                <li>
                  <a href="/">Purus</a>
                </li> */}
                
              </nav>
            </div>


            


            {/* <div className="w-full px-4 hidden">
              <h2 className="mb-3 text-lg tracking-widest">Placerat.</h2>
              <nav className="mb-10 list-none space-y-2 py-3">
                <li>
                  <a href="/">Et cursus fringilla.</a>
                </li>
                <li>
                  <a href="/">In velit sagittis.</a>
                </li>
                <li>
                  <a href="/">Mattis.</a>
                </li>
                <li>
                  <a href="/">Est.</a>
                </li>
              </nav>
            </div>


            <div className="w-full px-4 md:w-2/4 lg:w-1/5 hidden">
              <h2 className="mb-3 text-lg tracking-widest">Messa.</h2>
              <nav className="mb-10 list-none space-y-2 py-3">
                <li>
                  <a href="/">Id.</a>
                </li>
                <li>
                  <a href="/">Aliquam.</a>
                </li>
                <li>
                  <a href="/">Interdum.</a>
                </li>
                <li>
                  <a href="/">Risus.</a>
                </li>
              </nav>
            </div> */}


            <div className="flex flex-col items-center text-center w-[400px]">
                <div className="relative">
                  <div className="absolute top-0 right-0 pt-2 pr-2">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className='hidden'
                    >
                      <path
                        d="M6.66992 0.747559L0.669922 6.74756"
                        stroke="black"
                      />
                      <path
                        d="M0.669922 0.747559H6.66992V6.74756"
                        stroke="black"
                      />
                    </svg>
                  </div>
                  <div className="p-6">
                  {footer('allRightsText')}  <br/>
                  {footer('All rights are reserved')}
                  </div>
                </div>
            </div>
          </div>
        </div>

        
        <div className="px-2 hidden">
          <div className="max-w-8xl mx-auto px-5 py-6 ">
            <h2 className="text-black hidden">Diam egestas ultrices odio vitae.</h2>
            <div>
              <h2 className="my-4 text-sm hidden">
                Lorem ipsum accumsan arcu, consectetur adipiscing elit. Dolor
                proin tempor sed fermentum sit{" "}
                <br className="hidden lg:inline-block" /> pretium pellentesque.
                Dictumst risus elementum dignissim risus, lobortis molestie.
              </h2>
            </div>
            <div className="absolute right-0 -mt-24 hidden text-black lg:inline-block">
              <a href="/" className="mr-16">
                Terms & Conditions
              </a>
              <a href="/" className="mr-16">
                Privacy Policy
              </a>
              <a href="/" className="mr-16">
                Cookie Policy
              </a>
            </div>
            <div className="right-0 inline-block pt-12 pb-6 pr-20 text-sm text-black md:hidden">
              <a href="/" className="mr-16">
                Terms & Conditions
              </a>
              <a href="/" className="mr-16">
                Privacy Policy
              </a>
              <a href="/" className="mr-16">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );



  
}
