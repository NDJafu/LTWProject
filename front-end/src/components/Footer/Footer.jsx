import React from 'react'

const Footer = () => {
  const links = [{name:'Data settings'},{name:'Do not sell my personal info'},{name:'Privacy Policy'},{name:'Terms and Condition'}]
  return (
    <div className='text-center bg-gray-800 text-white py-2 text-sm'>
      <div className='flex justify-center divide-x-[1px] divide-gray-500 py-2'>
      {links.map(Link=>(
        <span key={Link.name} className='px-3'>{Link.name}</span>
      ))}
      </div>
      <p className='pt-10 py-2'>© 2023 adidas America, Inc.</p>
    </div>
    
  )
}

export default Footer