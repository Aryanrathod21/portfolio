'use client'
import React from 'react';
import Banner from '../banner';
import { useVisibility } from '@/components/visible/VisibilityContext'; // Adjust the path as needed

const Homepage = () => {
  const { setIsVisible } = useVisibility();

  React.useEffect(() => {
    setIsVisible(true); // Ensure header and footer are visible
  }, [setIsVisible]);

  return (
    <div>
      <Banner>
        <div className="xl:text-xl md:text-xl sm:text-xs text-xs">Hello, myself</div>
        <div className="xl:text-5xl md:text-3xl sm:text-2xl text-2xl">Aryan Rathod</div>
      </Banner>
    </div>
  );
};

export default Homepage;
