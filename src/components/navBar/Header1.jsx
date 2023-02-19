import React from 'react'
import { useState } from "react";
import "..//body/Section3"
import Section3 from '..//body/Section3';
const Header1 = () => {
  const [navbar, setNavbar] = useState(false);

  return (
<nav className="relative px-2 sm:px-4 py-3 w-full bg-zinc-900 ">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <a href="javascript:void(0)" className='relative hover:animate-rubber'>
                        <svg className='absolute fill-sky-600 brightness-150  hover:shadow-lg hover:shadow-sky-600/50 rounded-full w-12 h-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 715.55 715.55"><defs>
                         </defs>
                          <path d="M182.73,607.84a5.46,5.46,0,0,0,2.24,4.4c44.74,32.54,105.18,53.75,162.54,55.62C527.64,673.71,675.58,524.07,667.72,344A309.41,309.41,0,0,0,567.19,128.86a.06.06,0,0,0-.08,0l-1.47.91s0,0,0,.06V559.78a.07.07,0,0,1-.06.07H439.83a.07.07,0,0,1-.06-.07V400.53a.07.07,0,0,0-.13,0L353.12,552s-.09,0-.12,0L270,400.51a.07.07,0,0,0-.13,0V559.78a.07.07,0,0,1-.07.07H233.56a.07.07,0,0,1-.06-.07V259.13a.06.06,0,0,1,.12,0L354.79,473.53a.08.08,0,0,0,.12,0L477.26,259.09a.07.07,0,0,1,.13,0V525.4a.07.07,0,0,0,.07.07h50.46a.07.07,0,0,0,.06-.07V98.69s0,0,0,0l-3.7-3.71h0c-49-32.32-103.42-47.41-166.48-47.41-171.34,0-310.25,138.91-310.25,310.25,0,84,35.93,162.77,90.36,218.83a3.66,3.66,0,0,0,6.29-2.54l0-33.83-.79-382.8.07-.07H281.46a.07.07,0,0,1,.06,0l73.41,136.66a.07.07,0,0,0,.12,0L424.83,157.4a.07.07,0,0,1,.06,0h45.9a.07.07,0,0,1,.06.1L355.58,375.1a.07.07,0,0,1-.12,0L258.81,195a.07.07,0,0,0-.06,0H182.32l-.07.07.43,388.64Z"/>
                          {/* <circle className="fill-none blur-3xl" cx="357.77" cy="357.77" r="347.77"/> */}
                          </svg>
                        </a>
                        <div className="flex space-x-5 md:order-2 ">
                        <button class="py-1 px-5 relative border border-sky-600 brightness-150 font-semibold tracking-wide leading-none overflow-hidden hover:text-teal-600 group" type="button">
      <span class="-translate-x-full ease-in duration-700 group-hover:translate-x-0 -skew-x-12 absolute h-full -left-5 w-96 inset-0 bg-gradient-to-br from-sky-600 brightness-150  to-cyan-400 "></span>
      <span class="relative text-sm inset-0 flex justify-center items-center font-bold text-sky-600 brightness-150 transition-colors duration-100 ease-in-out group-hover:text-gray-900"> 
        Descargar HV
      </span>
    </button>
                            <button
                                className="relative md:hidden p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                        
                    <div
                        className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="flex flex-col mt-4 md:mt-0 md:flex-row items-center justify-center space-y-8 md:space-x-12 md:space-y-0">
                            <li className="text-gray-400 hover:text-sky-600 hover-underline-animation">
                                <a href="javascript:void(0)">Inicio</a>
                            </li>
                            <li className="text-gray-400 hover:text-sky-600 hover-underline-animation">
                                <a href="javascript:void(0)">Sobre Mí</a>
                            </li>
                            <li className="text-gray-400 hover:text-sky-600 hover-underline-animation">
                                <a href={Section3}>Portafolio</a>
                            </li>
                            <li className="text-gray-400 hover:text-sky-600 hover-underline-animation">
                                <a href="javascript:void(0)">Contacto</a>
                            </li>
                        </ul>
                    </div>

                </div>
               

        </nav>


  )
}

export default Header1