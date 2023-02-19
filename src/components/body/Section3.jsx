import React from 'react'
import Tarjetas from './Cards/Tarjetas'
import { motion } from "framer-motion";

const Section3 = () => {
  const sp="\u00A0"
  return (
    <div id="section3" className='relative bg-zinc-900  min-h-screen h-auto w-auto flex flex-wrap justify-center'>
       <h2 className='flex justify-center items-center text-1xl sm:text-2xl md:text-4xl lg:text-5xl m-12'>
         {[...`Mi${sp}Portafolio`].map((value, index) =>(
        <motion.span variants={value} key={index} className=" text-sky-600 brightness-150 inline-block hover:animate-rubber">

                {value}
        </motion.span> 
           ))}
       </h2>
        <Tarjetas/>
    </div>
  )
}

export default Section3