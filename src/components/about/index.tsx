import React from 'react'
import { FaLongArrowAltRight, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <section className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 h-fit w-full bg-slate-50 text-black py-16 gap-4'>
      <div className='flex justify-center flex-col gap-2'>
        <p className='font-bold text-2xl'>Hello I'm Aryan Rathod</p>
        <p className='font-semibold text-lg'>Full-stack Developer</p>
        <p className='font-normal max-w-lg'>
          I'm currently pursuing a degree in Computer Engineering at LDRP-ITR College in Gandhinagar and hail from Mahuva, Bhavnagar. I specialize in front-end development with expertise in Next.js, Tailwind CSS, and React.js. While I've primarily worked with Firebase for backend services, I'm eager to expand my knowledge in backend technologies like MongoDB and SQL. Passionate about continuous learning, I aim to become a full-stack developer.
        </p>
        <button className='mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-red-600 flex items-center w-fit'>
          Resume <FaLongArrowAltRight className='ml-2' />
        </button>
      </div>
      <div className='relative flex justify-center items-center'>
        <Image 
          src='/me.png' 
          alt='Aryan Rathod' 
          width={330} 
          height={330} 
          className='object-cover'
        />
        <div className='absolute w-4/5 md:w-3/4 lg:w-1/2 h-24 bg-white bottom-[-42px] shadow-2xl flex justify-center items-center rounded-lg'>
          <div className='flex gap-4'>
            <div className='relative group'>
              <a href="https://www.instagram.com/ar.yan21_" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='text-red-600 text-2xl' />
              </a>
              <span className='absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2'>
                Instagram
              </span>
            </div>
            <div className='relative group'>
              <a href="https://www.linkedin.com/in/aryan-rathod" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='text-blue-700 text-2xl' />
              </a>
              <span className='absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2'>
                LinkedIn
              </span>
            </div>
            <div className='relative group'>
              <a href="https://github.com/Aryanrathod21" target="_blank" rel="noopener noreferrer">
                <FaGithub className='text-black text-2xl' />
              </a>
              <span className='absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2'>
                GitHub
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
