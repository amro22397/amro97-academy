import CodeBlock from "@/components/CodeBlock";
import { arabicFonts } from "@/constants/arabicFonts";
import Link from "next/link";
import React from "react";

const page = () => {
  const globalCssFonts = `@import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&family=Almarai:wght@300;400;700;800&family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Atma:wght@300;400;500;600;700&family=Audiowide&family=Baloo+Bhaijaan+2:wght@400..800&family=Beiruti:wght@200..900&family=Bonbon&family=Bungee+Outline&family=Cairo:slnt,wght@-11..11,200..1000&family=Delius+Swash+Caps&family=Delius+Unicase:wght@400;700&family=DynaPuff:wght@400..700&family=El+Messiri:wght@400..700&family=Galindo&family=Gemunu+Libre:wght@200..800&family=Handjet:wght@100..900&family=Harmattan:wght@400;500;600;700&family=Henny+Penny&family=Iceberg&family=Irish+Grover&family=Jersey+15&family=Jockey+One&family=Kablammo&family=Lalezar&family=Lateef:wght@200;300;400;500;600;700;800&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Mada:wght@200..900&family=Marhey:wght@300..700&family=Metal+Mania&family=Mogra&family=Mystery+Quest&family=New+Rocker&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Noto+Kufi+Arabic:wght@100..900&family=Nova+Cut&family=Odibee+Sans&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Outfit:wght@100..900&family=Oxanium:wght@200..800&family=Pacifico&family=Passero+One&family=Poiret+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rakkas&family=Readex+Pro:wght@160..700&family=Reem+Kufi:wght@400..700&family=Roboto+Slab:wght@100..900&family=Rubik+Distressed&family=Rubik:wght@300..900&family=Ruwudu:wght@400;500;600;700&family=Saira+Stencil+One&family=Silkscreen:wght@400;700&family=Squada+One&family=Tajawal:wght@200;300;400;500;700;800;900&family=Tourney:ital,wght@0,100..900;1,100..900&family=Turret+Road:wght@200;300;400;500;700;800&family=Vibes&family=Zain:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,300;1,400&display=swap');`;

  const layoutFonts = `<head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&family=Almarai:wght@300;400;700;800&family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Atma:wght@300;400;500;600;700&family=Audiowide&family=Baloo+Bhaijaan+2:wght@400..800&family=Beiruti:wght@200..900&family=Bonbon&family=Bungee+Outline&family=Cairo:slnt,wght@-11..11,200..1000&family=Delius+Swash+Caps&family=Delius+Unicase:wght@400;700&family=DynaPuff:wght@400..700&family=El+Messiri:wght@400..700&family=Galindo&family=Gemunu+Libre:wght@200..800&family=Handjet:wght@100..900&family=Harmattan:wght@400;500;600;700&family=Henny+Penny&family=Iceberg&family=Irish+Grover&family=Jersey+15&family=Jockey+One&family=Kablammo&family=Lalezar&family=Lateef:wght@200;300;400;500;600;700;800&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Mada:wght@200..900&family=Marhey:wght@300..700&family=Metal+Mania&family=Mogra&family=Mystery+Quest&family=New+Rocker&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Noto+Kufi+Arabic:wght@100..900&family=Nova+Cut&family=Odibee+Sans&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Outfit:wght@100..900&family=Oxanium:wght@200..800&family=Pacifico&family=Passero+One&family=Poiret+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rakkas&family=Readex+Pro:wght@160..700&family=Reem+Kufi:wght@400..700&family=Roboto+Slab:wght@100..900&family=Rubik+Distressed&family=Rubik:wght@300..900&family=Ruwudu:wght@400;500;600;700&family=Saira+Stencil+One&family=Silkscreen:wght@400;700&family=Squada+One&family=Tajawal:wght@200;300;400;500;700;800;900&family=Tourney:ital,wght@0,100..900;1,100..900&family=Turret+Road:wght@200;300;400;500;700;800&family=Vibes&family=Zain:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,300;1,400&display=swap');
        </style>
        </head>`;
  return (
    <div className="mx-8 my-[122px] flex gap-10 flex-col" dir="rtl">
      <h1 className="flex text-5xl" style={{ fontFamily: "Readex Pro" }}>
        الخطوط العربية
      </h1>

      <p className="text-lg mb-1 font-semibold">
        أدخل على Google Fonts اضف الخط التي تريده لقائمة الخطوط التي تريدها - ثم
        انسخ الكود الخاص بالخطوط (بعد اضافة كل الخطوط التي تريدهها) <br />
        واضف الكود لملف layout.tsx داخل تاق {`<head></head>`} على سبيل المثال في
        Next Js - او انسخ الكود في اي ملف CSS مثل الرئيسي في Next js وهو
        Global.css
      </p>

      {/* <p className='text-md'
>
  الكود الخاص بالخطوط
<Link href="/font-code" className='hover:underline mr-3 ' >أضغط هنا</Link>
</p> */}

      {/* <Link href={`/english-fonts`} className='hover:underline text-indigo-600 text-2xl' >
Go to english fonts
</Link> */}

      <div className="flex flex-row justify-between items-start
      gap-[66px] my-3">
        
        


      <div className="">
      {/* <div className="w-[700px] mb-2">
        <div className="mb-5 text-xl">
          هذا الكود يحتوي على كل الخطوط التي في الصفحة ..
        </div>
        
      </div> */}

      <CodeBlock
          code={globalCssFonts}
          fileName="global.css"
          language="typescript"
          height="h-[250px]"
        />

      <CodeBlock
        code={layoutFonts}
        fileName="app/layout.tsx"
        language="typescript"
        height="h-[250px]"
      />
      </div>


      <div className="flex flex-wrap gap-[68px] mt-[6px]">
        {arabicFonts.map((font, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h1
              className="text-3xl"
              style={{ fontFamily: `${font.phontName}` }}
            >
              شكل الخط
            </h1>

            <span
              className="text-2xl"
              style={{ fontFamily: `${font.phontName}` }}
            >
              {font.phontName}
            </span>
          </div>
        ))}
      </div>
    </div>
      
      </div>



      
  );
};

export default page;
