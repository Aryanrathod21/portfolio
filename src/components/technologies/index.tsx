import React from 'react'
import Techgrid from '../techgrid'

type Props = {}

const Technologies = (props: Props) => {
  return (
    <section>
    <div>
        <div className='xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-bold flex justify-center items-center text-black lg:py-10 md:py-8 sm:py-6 py-4'>
            Core Technologies
        </div>
        <div >
            <Techgrid/>
        </div>
    </div>
    </section>
  )
}

export default Technologies