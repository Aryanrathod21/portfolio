'use client'
import React, { useState, useEffect } from "react";
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbFileTypeHtml } from "react-icons/tb";
import { BsFiletypeCss } from "react-icons/bs";
import { MdTabletAndroid } from "react-icons/md";

const CategoriesData = [
  {
    icon: RiNextjsFill,
    description: "Next.js is a React framework known for its powerful server-side rendering and static site generation capabilities. Its file-based routing system, automatic code splitting, and CSS support simplify development, while TypeScript integration and easy API route creation enhance productivity. With Next.js, developers can build high-performance web applications with ease.",
  },
  {
    icon: RiReactjsLine,
    description: "React.js, developed by Facebook, is a leading JavaScript library for building dynamic user interfaces. It enables developers to create reusable UI components that manage their own state, promoting modularity and scalability. React's virtual DOM improves performance by reducing direct manipulations of the actual DOM. Widely used for single-page applications, React's efficiency and strong ecosystem make it a top choice for modern web development.",
  },
  {
    icon: RiTailwindCssFill,
    description: "Tailwind CSS is a utility-first framework for web development, offering customizable, low-level utility classes. It enables rapid creation of custom designs with minimal CSS, prioritizing composability and responsiveness. Tailwind facilitates consistent, responsive layouts and encourages rapid prototyping and iteration. Its utility-based approach makes it a popular choice among developers for building modern, responsive web interfaces.",
  },
  {
    icon: TbFileTypeHtml,
    description: "HTML, or HyperText Markup Language, is the backbone of the web, organizing content into elements like headings, paragraphs, links, and images. It employs tags and attributes to format content for browsers, forming the structure of web pages. HTML serves as the foundation for web development, facilitating the creation of accessible and well-structured websites that can be styled with CSS and made interactive with JavaScript.",
  },
  {
    icon: BsFiletypeCss,
    description: "CSS3, the latest version of Cascading Style Sheets, revolutionizes web design with advanced selectors, enhanced media queries for responsive layouts, and robust animations for engaging user experiences. It introduces modules like Flexbox and Grid for efficient and flexible layout design. With CSS3, developers can craft visually stunning and modern web interfaces more easily and precisely, elevating the quality of user interaction on the web.",
  },
  {
    icon: MdTabletAndroid,
    description: "Android development is the creation of mobile applications for Android devices using languages like Java or Kotlin and tools like Android Studio. Apps range from simple utilities to complex enterprise solutions, leveraging features like sensors and location services. It's a dynamic field offering vast opportunities for developers to innovate and reach users worldwide through the Google Play Store.",
  },
];

const Techgrid = () => {
  const [selectedBox, setSelectedBox] = useState<number | null>(null);

  const handleBoxClick = (index: number) => {
    setSelectedBox(index);
  };

  const handleCloseModal = () => {
    setSelectedBox(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const boxes = document.querySelectorAll(".group");
      boxes.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if (boxPosition < screenPosition) {
          box.classList.add("animate-slide-up");
        } else {
          box.classList.remove("animate-slide-up");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="grid xl:grid-cols-3 grid-rows-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-12">
        {CategoriesData.map((cate, index) => (
          <div key={index} className="relative group pb-12">
            <div
              className="relative aspect-square transition-all duration-500 ease-in-out flex flex-col items-center justify-center p-8 border rounded-lg hover:bg-gray-200 bg-white transform shadow-lg shadow-black" // Added shadow classes
              onClick={() => handleBoxClick(index)}
            >
              {React.createElement(cate.icon, { className: `text-8xl ${selectedBox === index ? 'text-gray-700' : 'text-black'}` })}
              <p className="text-center mt-4 text-lg text-gray-500">
                {cate.description.length > 100
                  ? <>
                      {cate.description.slice(0, 100)}<span onClick={() => handleBoxClick(index)} className="text-blue-500 cursor-pointer">...more</span>
                    </>
                  : cate.description
                }
              </p>
            </div>
          </div>
        ))}
      </div>
      {selectedBox !== null && (
        <>
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm">
            {/* Background Blur */}
          </div>
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
            <div className="bg-gray-900 bg-opacity-75 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl">
              <div className="text-center mb-4">
                {React.createElement(CategoriesData[selectedBox].icon, { className: "text-6xl sm:text-7xl md:text-8xl text-white" })}
              </div>
              <div className="text-base sm:text-lg md:text-xl text-white">{CategoriesData[selectedBox].description}</div>
              <button onClick={handleCloseModal} className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-slate-300">Close</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Techgrid;
