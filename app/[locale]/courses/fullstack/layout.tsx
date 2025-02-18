import FrontendNav from '@/components/VideosPageNav/FrontendNav';
import FullstackNav from '@/components/VideosPageNav/FullstackNav';
import React from 'react'


export const metadata = {
    title: "Fullstack Projects",
    description: "Fullstack Projects",
  };

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
    <FullstackNav />
     {children} 
    </div>
  )
}

export default layout
