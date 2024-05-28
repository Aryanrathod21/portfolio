'use client'

import { RiNextjsFill , RiReactjsLine , RiTailwindCssFill  } from "react-icons/ri";
import { TbFileTypeHtml } from "react-icons/tb";
import { BsFiletypeCss } from "react-icons/bs";
import { MdTabletAndroid } from "react-icons/md";




import React, { useState } from "react";

const CategoriesData = [
  {
    icon: RiNextjsFill,
    description: "Enjoy the sun and sand at the best beaches.",
  },
  {
    icon: RiReactjsLine ,
    description: "Explore the best hiking trails.",
  },
  {
    icon: TbFileTypeHtml,
    description: "Engage in exciting water activities.",
  },
  {
    icon: BsFiletypeCss,
    description: "Discover charming towns and cities.",
  },
  {
    icon: RiTailwindCssFill ,
    description: "Visit historical landmarks and sites.",
  },
  {
    icon: MdTabletAndroid,
    description: "Experience the majestic redwoods.",
  },
];

const Techgrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section>
      <div className="grid xl:grid-cols-3 grid-rows-2 z-0 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-12">
        {CategoriesData.map((cate, index) => (
          <div key={index} className="relative group z-0 pb-12">
            <div
              className="relative aspect-square z-0 transition-image transition-all duration-500 ease-in-out flex flex-col items-center justify-center p-8 border rounded-lg hover:bg-gray-200"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <cate.icon className={`text-6xl ${hoveredIndex === index ? 'text-blue-500' : 'text-gray-500'}`} />
              <p className="text-center mt-4 text-lg text-black">{cate.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Techgrid;
