import CSS from "./Icons/CSS.svg"
import HTML from "./Icons/HTML.svg"
import JS from "./Icons/JavaScript.svg"
import REACT from "./Icons/React-Dark.svg"
import FIGMA from "./Icons/Figma-Dark.svg"
import MYSQL from "./Icons/MySQL-Dark.svg"
import GITHUB from "./Icons/Github-Dark.svg"
import TAILWIND from "./Icons/TailwindCSS-Dark.svg"
import WORDPRESS from "./Icons/Wordpress.svg"
import React from 'react'

const Skills = () => {
    const skills = 
        [
            {
                id: 1,
                image: HTML, 
                name: "HTML",
              },
            {
              id: 2,
              image: CSS, 
              name: "CSS",
            },
            
              {
                id: 3,
                image: JS, 
                name: "JavaScript",
              },
              {
                id: 4,
                image: REACT, 
                name: "React",
              },
              
              {
                id: 5,
                image: TAILWIND, 
                name: "TailwindCSS",
              },
              {
                id: 6,
                image: MYSQL, 
                name: "MySQL",
              },
              {
                id: 7,
                image: GITHUB, 
                name: "Github",
              },
              {
                id: 8,
                image: FIGMA, 
                name: "Figma",
                
              },
              {
                id: 9,
                image: WORDPRESS, 
                name: "WordPress",
              },
            ];


  return (
    <div className="grid grid-cols-3 mt-8">
        {skills.map((item) => (
          <img className="hover:animate-rubber w-20 p-2" src={item.image} key={item.id} title={item.name}/>
          ))}
    </div>
  )
}

export default Skills
