import { Tab } from '@headlessui/react';
import React from 'react'
import { motion } from "framer-motion";

const Box = ({nombre, nombre2, nombre3}) => {
const sp="\u00A0"
const tab="\u0085"

const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1, 
      transition: { staggerChildren: 0.20, delayChildren: 0.08 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

    nombre=`Hola,`
    nombre2=`soy${sp}Mauricio,`
    nombre3= `Desarrollador${sp}Web`
    return (
    
        <motion.div
    variants={container}
    initial="hidden"
    animate="visible"
  >
            {[...nombre].map((value, index) =>(
        <motion.span variants={child} key={index} className=" text-slate-100 text-7xl inline-block hover:animate-rubber hover:text-sky-600 brightness-200">
                {value}
        </motion.span> 
           ))}
<br/>
        {[...nombre2].map((value, index) =>(
        <motion.span variants={child} key={index} className="text-slate-100 text-7xl inline-block hover:animate-rubber hover:text-sky-600 brightness-200">
                {value}
        </motion.span> 
           ))}
<br/>
        {[...nombre3].map((value, index) =>(
        <motion.span variants={child} key={index} className="text-slate-100 text-7xl inline-block hover:animate-rubber hover:text-sky-600 brightness-200">
                {value}
        </motion.span> 
           ))}
        
        </motion.div>
      )
}

export default Box