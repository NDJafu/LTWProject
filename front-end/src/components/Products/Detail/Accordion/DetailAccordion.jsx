import React,{useState} from 'react'
import {FaAngleUp,FaAngleDown} from 'react-icons/fa'

const DetailAccordion = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='flex items-center flex-col border-t border-gray-300 w-1/2'>
      <div className='flex justify-between items-center gap-2 px-3 py-5 border-t w-full' onClick={()=>setOpen(!open)}>
        <h4 className='font-bold'>Details</h4>
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

export default DetailAccordion