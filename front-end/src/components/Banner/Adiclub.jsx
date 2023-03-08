import React from 'react'
import CoverButton from '../Buttons/CoverButton'

const AdiClub = () => {
  return (
    <div className='bg-yellow-300 flex justify-evenly md:py-14 px-8 pb-20 pt-8'>
        <div className='flex md:flex-nowrap flex-wrap gap-x-8'>
          <p className='uppercase text-3xl font-bold'>
              join our adiclub & get 15% off
          </p>
          <div className='invert relative w-3/4'>
            <CoverButton text="SIGN UP FOR FREE"/>
          </div>
        </div>
    </div>
  )
}

export default AdiClub