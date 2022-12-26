import React from 'react'
import useScript from './UseScript.jsx'
import Box from './Box.jsx';
const Mousetraill = (url) => {
    useScript(url);
  return (
<div className='relative bg-transparent'>
    <div className='absolute z-50 m-36'>
    <Box/>
    </div>
    <canvas id='canvas' className="-z-50"/>
</div>
  )
}

export default Mousetraill