import FrontendNav from '@/components/VideosPageNav/FrontendNav';
import React from 'react'


export const metadata = {
    title: "Frontend Projects",
    description: "Frontend Projects",
  };

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
    <FrontendNav />
     {children} 
    </div>
  )
}

export default layout
