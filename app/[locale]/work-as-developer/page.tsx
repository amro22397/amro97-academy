"use client";

import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const page = () => {
  const workAsDeveloperPage = useTranslations("WorkAsDeveloperPage");

  const locale = useLocale();

  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="mx-auto flex flex-col justify-center items-center pb-[78px]
    w-[1250px]"
    >
      <div
        className="flex w-full flex-col text-left lg:text-center gap-4
      mb-9 "
      >
        <h2
          className="bold text-3xl leading-tight text-black lg:text-[37.5px]"
          style={locale === "en" ? { fontFamily: "Poppins" } : {}}
        >
          {workAsDeveloperPage("HowToWorkAsDeveloper")}
        </h2>

        {locale === "en" ? (
          <span className="work-as-developer-desc">
            If you do something to be as a work experience, 6 month of real
            projects experience may help getting internship in a company, and 1
            year of the same experience will increase your chances to get junior
            developer role. <br />
            It is recommended to start search for a job or making an experience
            after applying at least 5-6 frontend and 3-4 fullstack project from
            videos, because you need to be good and able to solve coding
            problems to prove your value to companies.
          </span>
        ) : (
          <span className="work-as-developer-desc">
            إذا قمت بتطبيق إحدى هذه الطرق لتكوين خبرة عملية ، 6 أشهر من تصميم
            المشاريع الحقيقية قد يكون كافياً للحصول على تدريب في شركة ، وسنة أو
            كثر من تكوين الخبرة بنفس الطرق سوف يزيد فرصك لتحصل على وظيفة مبرمج
            جونيور في شركة. <br />
            ينصح قبل البحث عن عمل او تكوين خبرة عملية أن يكون ذلك بعد تطبيق عدد
            5-6 مشاريع واجهة أمامية و 3-4 مشاريع واجهة كاملة من الفيديوهات ،
            لأنك كمبرمج تحتاج لتكون جيدا في البرمجة وتستطيع حل المشكلات البرمجية
            التي تواجهك في المشاريع لتثبث قيمتك للشركات
          </span>
        )}

        {/* {locale === "en" ? (
          <span className="work-as-developer-desc">
            It is recommended to start search for a job or making an experience
            after applying at least 5-6 frontend and 3-4 fullstack project from
            videos, because you need to be good and able to solve coding
            problems to prove your value to companies.
          </span>
        ) : (
          <span className="work-as-developer-desc">
            ينصح قبل البحث عن عمل او تكوين خبرة عملية أن يكون ذلك بعد تطبيق عدد
            5-6 مشاريع واجهة أمامية و 3-4 مشاريع واجهة كاملة من الفيديوهات ،
            لأنك كمبرمج تحتاج لتكون جيدا في البرمجة وتستطيع حل المشكلات البرمجية
            التي تواجهك في المشاريع لتثبيك قيمتك للشركات.
          </span>
        )} */}


      </div>

      {/* <div className="flex w-full flex-col text-left lg:text-center">
            <h3 className="text-2xl text-black">
              Lorem ipsum arcu, consectetur adipiscing elit. Viverra elementum
              pellentesque <br className="hidden lg:inline-block" />
              tortor, luctus blandit sed dolor et, semper. Posuere vitae vitae,
              ac mus. Arcu quis feugiat.
            </h3>
          </div> */}

      <div className="flex flex-row justify-center w-full gap-8">
        <div className="flex flex-col w-full gap-6">
          <h2 className="accordion-title">{workAsDeveloperPage("To have a job")}</h2>

          <Accordion
            type="single"
            collapsible
            className="accordion-work-as-developer"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger
                className="accordion-trigger-work-as-developer
            hover:no-underline hover:text-black/85"
              >
                {locale === "en" ? (
                  <h2 className="accordion-trigger-work-as-developer-h2">
                    Search for a job in job platforms
                  </h2>
                ) : (
                  <h2 className="accordion-trigger-work-as-developer-h2">
                    أبحث عن عمل في منصات العمل المختلفة
                  </h2>
                )}
              </AccordionTrigger>

              <AccordionContent className="">
                <p className="tracking-wide text-[16px] text-gray-800 mx-3">
                  You can search in famous platform like Linkedin, Indeed,
                  Naukrigaulf, Glassdoor, Monster and others, <br />
                  but the issue that these jobs or junior developer roles need
                  to have at least one or two years of experience so I will
                  mention other methods to help you make a work experience..
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion
            type="single"
            collapsible
            className="accordion-work-as-developer"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger
                className="accordion-trigger-work-as-developer
            hover:no-underline hover:text-black/85"
              >
                {locale === "en" ? (
                  <h2 className="accordion-trigger-work-as-developer-h2">
                    Search for a job in Freelance platforms
                  </h2>
                ) : (
                  <h2 className="accordion-trigger-work-as-developer-h2">
                    إبحث عن عمل في منصات العمل الحر
                  </h2>
                )}
              </AccordionTrigger>

              <AccordionContent className="">
                <p className="tracking-wide text-[16px] text-gray-800 mx-3">
                  You can search in Freelance platforms like Upwork, Freelancer,
                  Fiverr and others or the arabic ones like مستقل ، خمسات وكفيل{" "}
                  <br />
                  but the issue with these platforms that there are many good
                  developers on them and each client when he request to build
                  for him something or edit something on his website, he will
                  get so many proposals and offers so it is hard to compete them
                  for a job, specifically if you are a new developer, maybe if
                  you have many years of experience and a great portfolio there
                  will be a chance.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex flex-col w-full gap-6">
          <h2 className="accordion-title">{workAsDeveloperPage("To make an experience")}</h2>

          <Accordion
            type="single"
            collapsible
            className="accordion-work-as-developer"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger
                className="accordion-trigger-work-as-developer
            hover:no-underline hover:text-black/85"
              >
                {locale === "en" ? (
                  <h2 className="accordion-trigger-work-as-developer-h2">
                    Search for an internship or training
                  </h2>
                ) : (
                  <h2 className="accordion-trigger-work-as-developer-h2">
                    أبحث عن تدريب في شركة
                  </h2>
                )}
              </AccordionTrigger>

              <AccordionContent className="">
                <p className="tracking-wide text-[16px] text-gray-800 mx-3">
                  You can search for internship or training in the job
                  platforms, If you have an internship or training in a good
                  company, that will be a great experience and it will help you
                  getting a job later, <br /> for example a 6 months to 1 year
                  of experience will give you a good chances in getting junior
                  developer role..
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* <div
          className="flex flex-col gap-3 justify-center items-start w-full
          overflow-hidden"
        >
          <h2 className="text-[24px] font-bold tracking-wide">
            Search for an internship or training in the same job platforms
          </h2>

          <p className="tracking-wide text-[16px] text-gray-800 mx-3">
            If you have an internship or training in a good company, that will
            be a great experience <br />
            and it will help you getting a job later, for example i heard that 6
            months to 1 year of experience may help <br />
            get junior developer role..
          </p>
        </div> */}

          <Accordion
            type="single"
            collapsible
            className="accordion-work-as-developer"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger
                className="accordion-trigger-work-as-developer
            hover:no-underline hover:text-black/85"
              >
                {locale === "en" ? (
                  <h2 className="accordion-trigger-work-as-developer-h2">
                    Work with a team of junior developers
                  </h2>
                ) : (
                  <h2 className="accordion-trigger-work-as-developer-h2">
                    أعمل مع فريق من المبرمجين الجدد
                  </h2>
                )}
              </AccordionTrigger>

              <AccordionContent className="">
                <p className="tracking-wide text-[16px] text-gray-800 mx-3">
                  Maybe this method is not available easily in our middle east
                  area, but if you find at least one or two junior developers
                  like you, instead of continuing applying tutorials and
                  projects from videos, <br /> <br />
                  maybe at least applying 5-6 frontend and 3-4 fullstack is
                  enough to learn but making real projects with a team that
                  solves a real problem or people can use, <br /> can be a great
                  experience that you can put in your resume, it will show that
                  you know how to use git and github to collaborate <br />{" "}
                  <br />
                  and a small group of people who works at least 4-5 hours a day
                  can be a like small company, if they make good projects
                  together that they can share to people to use them or try to
                  learn how improve their SEO to appear in first results in
                  search engines like google, you can make ads from google
                  adsense and others on them and benefit from them so much,
                  because they say google adsense bring a lot of money, <br />{" "}
                  <br />
                  also, they may get real clients if they advertise to
                  themselves in social media like instagram or facebook or try
                  to reach local businesses and offer making them a websites.{" "}
                  <br /> <br />
                  if you made projects with your team and deployed them you can
                  put their links in the work experience that you put in your cv
                  to be a real proof
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion
            type="single"
            collapsible
            className="accordion-work-as-developer"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger
                className="accordion-trigger-work-as-developer
            hover:no-underline hover:text-black/85"
              >
                {locale === "en" ? (
                  <h2 className="accordion-trigger-work-as-developer-h2">
                    Build your own startup or a freelance project
                  </h2>
                ) : (
                  <h2 className="accordion-trigger-work-as-developer-h2">
                    صمم مشروعك الابتدائي أو إعمل مشروع عمل حر
                  </h2>
                )}
              </AccordionTrigger>

              <AccordionContent className="">
                <p className="tracking-wide text-[16px] text-gray-800 mx-3">
                  If you make a project on your own, that solves a real problem
                  or people can use, <br />
                  that can be your own startup and you can write in your resume
                  that you are the founding developer of this startup, <br />
                  or you can try to offer one of your family members or friends
                  or any people that you know building for them a website for
                  free <br />
                  and it will be an experience to mention in your cv, here is a
                  video that will help you if you want make a real projects by
                  your self or start your freelance store
                  <Link
                    href={`/${locale}/single-video?videoId=RcDJ6Ovjb90`}
                    className="hover:underline mx-1
                 text-indigo-700 active:text-indigo-950"
                    target="_blank"
                  >
                    click here
                  </Link>
                  by methods like templates and others that will save you a lot
                  of time <br /> <br />
                  if you made a project and deployed it you can put its link in
                  the work experience that you put in your cv to be a real proof
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion
            type="single"
            collapsible
            className="accordion-work-as-developer"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger
                className="accordion-trigger-work-as-developer
            hover:no-underline hover:text-black/85"
              >
                {locale === "en" ? (
                  <h2 className="accordion-trigger-work-as-developer-h2">
                    Search for a virtual experience in google
                  </h2>
                ) : (
                  <h2 className="accordion-trigger-work-as-developer-h2">
                    ابحث عن تدريب إفتراضي من خلال قوقل
                  </h2>
                )}
              </AccordionTrigger>

              <AccordionContent className="">
                <p className="tracking-wide text-[16px] text-gray-800 mx-3">
                  There are many companies like EA and others which provides a
                  virtual training program on their websites, <br />
                  you can do it and when you complete it you get a certificate
                  that will be a real proof that you have an experience from
                  this company and you can put this experience in your resume..
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default page;
