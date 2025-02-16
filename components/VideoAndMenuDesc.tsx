'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

const VideoAndMenuDesc = () => {

      const videoAndMenuDescPage = useTranslations("VideoAndMenuDesc")
    

  return (
    <>
      {videoAndMenuDescPage("Description1")} <br/>
      {videoAndMenuDescPage("Description2")} <br />
      
    </>
  )
}

export default VideoAndMenuDesc
