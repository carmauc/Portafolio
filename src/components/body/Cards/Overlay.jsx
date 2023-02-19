import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Overlay = ({children, close}) => {
  return (
    <div className="fixed flex flex-wrap justify-center overscroll-none overflow-x-hidden overflow-y-auto sm:items-start sm:p-10 bg-slate-600 w-full h-full inset-0 z-40" onClick={close}>
        {children}

        </div>
  )
}

export default Overlay