'use client'
import React, { useState, useEffect } from "react";
import { RiPlantLine, RiTailwindCssFill } from "react-icons/ri";
import { FaPlaneDeparture } from "react-icons/fa";
import { GiTrophiesShelf, GiWhistle } from "react-icons/gi";
import { CiMobile3 } from "react-icons/ci";
import { IoIosChatbubbles } from "react-icons/io";

const CategoriesData = [
  {
    icon: RiPlantLine,
    title: "Lustria E-comm",
    description: "During my internship at The Special Character Project, I developed Lustria, an e-commerce website specializing in plant sales. This platform was built using Next.js and Tailwind CSS, ensuring a modern and visually appealing design. The site is fully responsive, providing a seamless shopping experience across devices. Key features include a user-friendly interface, efficient navigation, and robust functionality to enhance the online purchasing process for plant enthusiasts.",
    link: "https://github.com/Vishwang0Suthar/Lustria_main"
  },
  {
    icon: FaPlaneDeparture,
    title: "Viewport travel",
    description: "During my college 6th semester, I developed Viewport, a travel website that allows users to choose vacation destinations and purchase tickets. This project was built using Next.js for the frontend, Tailwind CSS for styling, and Firebase for the backend. Viewport is fully responsive, ensuring an optimal user experience on all devices. Key features include destination search, ticket booking, and user-friendly navigation, making travel planning and booking seamless and efficient.",
    link: "https://github.com/Aryanrathod21/Viewport/tree/aaryan"
  },
  {
    icon: GiTrophiesShelf,
    title: "Xenesis Event",
    description: "During my college tenure, I was selected to create a website for the upcoming college event, Xenesis. I developed the frontend using React.js and Tailwind CSS, focusing on ticket purchasing and confirmation functionalities. The website was fully responsive and provided a seamless user experience across all devices. Notably, the website was live during the event, showcasing my ability to deliver functional and aesthetically pleasing web solutions under real-world conditions.",
    link: "https://github.com/mayankyadav1711/xenesis_frontend"
  },
  {
    icon: GiWhistle,
    title: "Coachmate",
    description: "As team leader, I led the development of Coachmate, a website selected by the SSIP23 jury of Gujarat, a state-level hackathon competition, reaching the finals. This platform allows institutions to interface with various sports events like Khelmahakumbh, assign new coaches, and enable coaches to share athletes progress. Developed using the MERN stack, Coachmate offers a comprehensive solution for managing sports events and athlete development, demonstrating our teams capability in delivering impactful and functional web solutions.",
    link: "https://github.com/Atveek/Coach-Management-TM000468"
  },
  {
    icon: IoIosChatbubbles,
    title: "Chat Application",
    description: "I developed a web-based Chat Application using Next.js and Tailwind CSS for the frontend. For the backend, I utilized MongoDB and Express.js, with Mongoose for database connectivity. This application allows users to register, log in, and engage in real-time chat with others. To enable real-time communication, I implemented WebSocket connections using Socket.io, ensuring a seamless and interactive chatting experience.",
    link: "https://github.com/Aryanrathod21/PRODIGY_FS_04"
  },
  {
    icon: CiMobile3,
    title: "Krushiaadhar App",
    description: "As part of the SSIP22 state-level hackathon competition, I worked on Krushiaadhar, a mobile application developed in Android Studio. This app allows farmers to learn new farming techniques, stay updated on market trends, and save personal and farm-related information. Our team was tasked with creating both a website and a mobile application; I was a member of the mobile app team, ensuring we delivered a functional, user-friendly solution to support farmers.",
    link: "https://drive.google.com/drive/folders/1NEBTZx3GaGmCRnbzvw9llBcKnMG1o7p8"
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
              className="relative aspect-square transition-all duration-500 ease-in-out flex flex-col items-center justify-center p-8 border rounded-lg hover:bg-gray-200 bg-white transform shadow-lg shadow-black"
              onClick={() => handleBoxClick(index)}
            >
              <a
                href={cate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 left-2 flex items-center bg-green-300 p-2 rounded-lg border text-black font-bold hover:bg-red-300"
              >
                Link
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 9H7a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {React.createElement(cate.icon, { className: `text-8xl ${selectedBox === index ? 'text-gray-700' : 'text-black'}` })}
              <p className="text-center mt-4 text-2xl font-bold text-black">
                {cate.title}
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
            <div className="bg-gray-900 bg-opacity-75 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl max-h-[80vh] overflow-y-auto">
              <div className="text-center mb-4">
                {React.createElement(CategoriesData[selectedBox].icon, { className: "text-6xl sm:text-7xl md:text-8xl text-white" })}
              </div>
              <div className="text-base sm:text-lg md:text-xl text-white">{CategoriesData[selectedBox].description}</div>
              <a href={CategoriesData[selectedBox].link} target="_blank" rel="noopener noreferrer" className="block mt-4 text-blue-500 underline text-center">
                Project Link
              </a>
              <button onClick={handleCloseModal} className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-slate-300">Close</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Techgrid;
