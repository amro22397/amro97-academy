import FrontendNav from '@/components/VideosPageNav/FrontendNav';
import FullstackNav from '@/components/VideosPageNav/FullstackNav';
import React from 'react'


export const metadata = {
    title: "Frontend Projects",
    description: "Frontend Projects",
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
