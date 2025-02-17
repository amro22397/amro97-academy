import { getLocale, getTranslations } from 'next-intl/server'
import React from 'react'

const page = async () => {

    const aboutPage = await getTranslations('AboutPage');

    const locale = await getLocale();

  return (
    <div className="text-black">
            <div
              className="
              max-w-9xl
              mx-auto
              flex
              flex-col
              items-center
              justify-center
              px-5
            "
            >
              <div className="mr-0 mb-6 w-full py-4 text-center lg:w-2/3">

                <h2 className={`mb-4 text-4xl font-bold sm:text-5xl
                    ${locale === "ar" && "mb-5"}`}>
                  {aboutPage('About Us')}
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                {aboutPage('AcademyEstablished')}
                </p>
                
              </div>
              
            </div>
          </div>
        
  )
}

export default page
