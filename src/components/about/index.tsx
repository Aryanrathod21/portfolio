import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
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
          Projects <FaLongArrowAltRight className='ml-2' />
        </button>
      </div>
      <div className='flex justify-center items-center'>
        <Image 
          src='/zoro.png' 
          alt='Aryan Rathod' 
          width={500} 
          height={500} 
          className='object-cover'
        />
      </div>
    </section>
  )
}

export default About
