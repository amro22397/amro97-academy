import CoursesContent from "@/components/FlayoutContent/CoursesContent"
import WebFontsContent from "@/components/FlayoutContent/WebFontsContent"

export const Navigation = [
    {
        name: 'Home',
        arName: 'الصفحة الرئيسية',
        href: '',
        style: '',
        
    },
    {
        name: 'Roadmaps',
        arName: 'المسارات',
        href: '/roadmaps',
        style: 'hidden',
        
    },

    {
        name: 'Courses',
        arName: 'الكورسات',
        href: '/courses/frontend',
        style: '',
        FlayOutConent: <CoursesContent />,
        noCourserPointer: true,
    },

    {
        name: 'Web fonts',
        arName: 'خطوط الويب',
        href: '/web-fonts',
        style: '',
        FlayOutConent: <WebFontsContent />,
        noCourserPointer: true,
    },

    {
        name: 'Contact us',
        arName: 'تواصل معنا',
        href: '/contact-us',
        style: '',
    },

    {
        name: 'About us',
        arName: 'نبذة عنا',
        href: '/about',
        style: '',
    },
]