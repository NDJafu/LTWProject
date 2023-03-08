import React from 'react'
import { FaBars } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
const Bars = () => {
  return (
    <div className='md:hidden block'>
      <FaBars size={32}/>
    </div>
  )
}

const Close = () => {
  return (
    <div className='md:hidden block'>
      <GrClose size={32}/>
    </div>
  )
}

export {Bars,Close}
