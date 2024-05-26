"use client";
import React, { ReactNode } from 'react';
import videoSrc from '../../../public/videoplayback.mp4';
import Image from 'next/image';

type Props = {
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
};

const InitialPage = ({ children, imageSrc, imageAlt }: Props) => {
  return (
    <div className='Banner relative h-screen'>
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        className='w-full h-full object-cover'
      />
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72'>
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout='fill'
            className='rounded-full object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default InitialPage;
