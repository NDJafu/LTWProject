import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'

const MobileSearchBar = () => {
  return (
    <div className='bg-white absolute w-full'>
      <form className='bg-gray-500'>
        <button className='absoulte'><FaChevronLeft/></button>
        <input type="text"></input>
      </form>
    </div>
  )
}

export default MobileSearchBar