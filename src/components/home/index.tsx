"use client"
import React, { useState, useEffect } from 'react';
import Banner from '../banner';
import InitialPage from '../initial';
import { useVisibility } from '@/components/visible/VisibilityContext'; // Adjust the path as needed

const imageSrc = '/zoro.png'; // Adjust the path as needed
const imageAlt = 'Description of the image';

const Homepage = () => {
  const { setIsVisible } = useVisibility();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setIsVisible(false); // Hide header and footer initially

    const timer = setTimeout(() => {
      setShowBanner(true);
      setIsVisible(true); // Show header and footer after 2 seconds
    }, 2000);

    // Cleanup the timer if the component unmounts
    return () => {
      clearTimeout(timer);
      setIsVisible(true); // Ensure visibility is reset if component unmounts
    };
  }, [setIsVisible]);

  return (
    <div>
      {showBanner ? (
        <Banner>
          <div className="xl:text-xl md:text-xl sm:text-xs text-xs">Hello, myself</div>
          <div className="xl:text-5xl md:text-3xl sm:text-2xl text-2xl">Aryan Rathod</div>
        </Banner>
      ) : (
        <InitialPage imageSrc={imageSrc} imageAlt={imageAlt}>
          <p>Initial Page Content</p>
        </InitialPage>
      )}
    </div>
  );
};

export default Homepage;
