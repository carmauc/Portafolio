import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Bars4Icon } from '@heroicons/react/20/solid'
import Icons from './Icons'
import "./Drop.css"
const Dropdown = () => {
  return (
    <nav className="p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700">

<div className="container flex items-center flex-wrap justify-between mx-auto">
      <a href="https://flowbite.com" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>

        <a className="flex items-center hover-underline-animation text-black"> Hola
            </a>
    
    <Menu as="div" className="relative inline-block text-left z-50" >
    <div>
    <Menu.Button  className="flex items-center w-full justify-center rounded-md p-4 hover:shadow-cyan-500/50 shadow-lg">
      <Bars4Icon className=" h-5 w-5 fill-sky-600 brightness-200  shadow-cyan-500/50 "
              aria-hidden="true"/>
        </Menu.Button>
    </div>

    <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >


      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div>
      <Menu.Item>
          {({ active }) => (
              <button
              className={`${
                active ? "hover:shadow-cyan-500/50 shadow-lg text-white" : " text-white"
              } relative flex justify-evenly w-full items-center rounded-md px-2 py-2 text-xl hover-underline-animation`}
            >
              <div className='relative'>
              {active ? (
                <Icons.Archive
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              ) : (
                <Icons.Archive
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              )}
              </div>
              Archive
            </button>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
              <button
              className={`${
                active ? "hover:shadow-cyan-500/50 shadow-lg text-white" : "text-white"
              } group flex w-full items-center rounded-md px-2 py-2 text-xl hover-underline-animation`}
            >
              {active ? (
                <Icons.Archive
                  className="mr-2 h-5 w-5"
                  aria-hidden="true"
                />
              ) : (
                <Icons.Archive
                  className="mr-2 h-5 w-5"
                  aria-hidden="true"
                />
              )}
              Archive2
            </button>
          )}
        </Menu.Item>
                </div>



        {/* <Menu.Item>
        <span className="text-fuchsia-50">Invite a friend (coming soon!)</span>
s        </Menu.Item> */}
      </Menu.Items>
      </Transition>
    </Menu>
    </div>
    </nav>
  )
}  

export default Dropdown