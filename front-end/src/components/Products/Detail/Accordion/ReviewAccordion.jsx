import React,{useState} from 'react'
import {FaAngleUp,FaAngleDown} from 'react-icons/fa'

const ReviewAccordion = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='flex items-center flex-col border-t border-gray-300 w-1/2'>
      <div className='flex items-center gap-2 px-3 py-5 border-t w-full' onClick={()=>setOpen(!open)}>
        <div className='flex justify-between w-full'>
          <h4 className='font-bold'>Reviews</h4>
          <h4>rating</h4>
        </div>
        {open?<FaAngleUp/>:<FaAngleDown/>}
      </div>
      { open && (
      <div className='p-4'>
          Review Component
          Review Component
          Review Component
          Review Component
      </div>)
      }
    </div>
  )
}

export default ReviewAccordion