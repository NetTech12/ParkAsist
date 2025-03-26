import React from 'react'
import hero from '../../assets/hero.png'


const Hero = () => {
    return (
        <div className=" min-h-100 md:min-h-196  h-full w-auto bg-cover bg-center flex flex-col text-stroke  text-start justify-start items-end " style={{ backgroundImage: `url(${hero})` }}>
          
            <h1 className=' max-w-full md:max-w-125 pl-0 md:pt-8 md:pl-5 pb-5'>HAYATINIZI KOLAYLAŞTIRAN  <span>PARK ÇÖZÜMÜ!!
            </span></h1>
       
            
             
        </div>
    )
}

export default Hero
