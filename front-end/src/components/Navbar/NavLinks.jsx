import React from 'react'

const NavLinks = () => {
  const links = [{name: 'Men'},{name: 'Women'},{name:'Kids'}]
  return (
    links.map(Link=>(
      <div>
        <div className='text-left md:cursor-pointer'>
          <h1 className='py-3'>{Link.name}</h1>
        </div>
      </div>
    ))
  )
}

export default NavLinks