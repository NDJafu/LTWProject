import React from 'react'
import CoverImg from '../../assets/cover/cover-2023.webp'
import CoverButton from '../Buttons/CoverButton'
const Cover = () => {
  return (
    <div className='relative flex justify-center'>
      <div className='absolute top-1/2 text-white w-4/5 md:block hidden'>
        <h1 className='lg:text-4xl text-3xl font-bold'>THE 2023 COLLECTION</h1>
        <p className='py-4 lg:text-lg text-md w-1/3'>A modern exploration of form, function, and color—discover Chapter 02 now.</p>
        <CoverButton text={"SHOP NOW"}/>  
      </div>
      <img src={CoverImg} alt=""/>
    </div>
  )
}

export default Cover