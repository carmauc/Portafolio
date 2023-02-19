import React from 'react'
import { motion } from "framer-motion";
import Skills from './Skills';
const Section2 = () => {
    const sp="\u00A0"
  
  return (
    <section id="section2" className='relative bg-zinc-900 min-h-screen h-auto w-auto flex flex-wrap justify-center md:grid md:grid-cols-2'>
            <div className='flex flex-col justify-center items-center m-10 '>

        <h2 className='text-1xl sm:text-2xl md:text-4xl lg:text-5xl m-12 '>
         {[...`Sobre${sp}Mí`].map((value, index) =>(
        <motion.span variants={value} key={index} className=" text-sky-600 brightness-150 inline-block hover:animate-rubber ">
                {value}
        </motion.span> 
           ))}
           </h2>
    
       <p className="animate-fade text-white text-center text-sm md:text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id recusandae minus nam accusamus labore provident, vel illum natus aperiam laboriosam harum eaque, vitae tempore repudiandae ab sequi eos nisi incidunt!</p>
       </div>

       <div className='flex flex-col justify-center items-center'>
        <h3 className="text-slate-300 text-1xl md:text-3xl mt-5 ">Skills</h3>
    <Skills />
    </div>
    </section>
  )
}

export default Section2