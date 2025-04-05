import React from 'react'
import hero from '../../assets/hero.png'


const Hero = () => {
    return (
        <div className=" min-h-100 md:min-h-196  h-full w-auto bg-cover bg-center flex flex-col text-stroke  text-start justify-start items-end " style={{ backgroundImage: `url(${hero})` }}>
          
            <h1 className='!text-[2.5rem]   md:!text-[3.0rem] pt-6  max-w-full md:max-w-210 pl-0 md:pt-8 md:pl-1 pb-5'>HAYATINIZI KOLAYLAŞTIRAN  <span>PARK ÇÖZÜMÜ!!
            </span></h1>
       
            
             
        </div>
    )
}

export default Hero
