'use client'
import React, { useState } from 'react';

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className='bg-red-50 sticky shadow-sm top-0 z-40 h-16 flex items-center justify-between'>
        <div className='flex items-center'>
          <p className='text-black text-3xl font-extrabold'>Aryan</p>
          <p className='text-green-500 text-3xl font-extrabold'>.</p>
        </div>
        <ul className='hidden lg:flex flex-row gap-8 text-black text-xl font-medium'>
          <li>Home</li>
          <li>Resume</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <div className='lg:hidden'>
          <button
            onClick={toggleMenu}
            className={`text-black focus:outline-none transition-transform duration-300 ${
              isMenuOpen ? 'rotate-90' : ''
            }`}
          >
            ☰
          </button>
        </div>
      </section>
      {isMenuOpen && (
        <div className='lg:hidden bg-red-50 shadow-sm flex flex-col items-center justify-center fixed top-16 left-0 w-full z-50'>
          <a href="#home" className='py-2 text-black text-xl font-medium'>Home</a>
          <a href="#resume" className='py-2 text-black text-xl font-medium'>Resume</a>
          <a href="#projects" className='py-2 text-black text-xl font-medium'>Projects</a>
          <a href="#contact" className='py-2 text-black text-xl font-medium'>Contact</a>
        </div>
      )}
    </>
  );
};

export default Header;
