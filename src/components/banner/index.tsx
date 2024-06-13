import React, { ReactNode } from 'react';
import videoSrc from '../../../public/onepiece.mp4';

type Props = {
  children: ReactNode;
};

const Banner = ({ children }: Props) => {
  return (
    <div className='Banner relative h-screen'>
      {/* Video for screens larger than md */}
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        className='hidden md:block w-full h-full object-cover'
      />
      {/* Image for screens smaller than md */}
      <img
        src='/mobile.jpg'
        alt='Banner Image'
        className='block md:hidden w-full h-full object-cover'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center'>
        <div className='text-center p-4 bg-white text-black font-bold border-2 border-black rounded-lg shadow-chat-box'>
          {children}
        </div>
        {/* <Link href="/Contact-page"><button className='mt-14 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-red-600 flex items-center'>
          Contact me <FaLongArrowAltRight className='ml-2' />
        </button></Link> */}
      </div>
    </div>
  );
};

export default Banner;
