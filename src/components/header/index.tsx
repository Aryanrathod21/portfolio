import React, { useState } from 'react';

const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (section) => {
    scrollToSection(section);
    setActiveMenuItem(section);
    setTimeout(() => {
      setActiveMenuItem(null);
    }, 3000); // Hide active menu item after 3 seconds
  };

  return (
    <>
      <section className='bg-black sticky shadow-sm top-0 z-40 h-16 flex items-center justify-between'>
        <div className='flex items-center'>
          <p className='text-white text-3xl font-extrabold'>Aryan</p>
          <p className='text-green-500 text-3xl font-extrabold'>.</p>
        </div>
        <ul className='hidden lg:flex flex-row gap-8 text-white text-xl font-medium'>
          <li className={activeMenuItem === 'home' ? 'active' : ''} onClick={() => handleMenuClick('home')}>Home</li>
          <li className={activeMenuItem === 'about' ? 'active' : ''} onClick={() => handleMenuClick('about')}>Resume</li>
          <li className={activeMenuItem === 'projects' ? 'active' : ''} onClick={() => handleMenuClick('projects')}>Projects</li>
          <li className={activeMenuItem === 'contact' ? 'active' : ''} onClick={() => handleMenuClick('contact')}>Contact</li>
        </ul>
        <div className='lg:hidden'>
          <button
            onClick={toggleMenu}
            className={`text-white focus:outline-none transition-transform duration-300 ${
              isMenuOpen ? 'rotate-90' : ''
            }`}
          >
            ☰
          </button>
        </div>
      </section>
      {isMenuOpen && (
        <div className='lg:hidden bg-black shadow-sm flex flex-col items-center justify-center fixed top-16 left-0 w-full z-50'>
          <a onClick={() => { handleMenuClick('home'); toggleMenu(); }} className='py-2 text-white text-xl font-medium'>Home</a>
          <a onClick={() => { handleMenuClick('about'); toggleMenu(); }} className='py-2 text-white text-xl font-medium'>Resume</a>
          <a onClick={() => { handleMenuClick('projects'); toggleMenu(); }} className='py-2 text-white text-xl font-medium'>Projects</a>
          <a onClick={() => { handleMenuClick('contact'); toggleMenu(); }} className='py-2 text-white text-xl font-medium'>Contact</a>
        </div>
      )}
    </>
  );
};

export default Header;
