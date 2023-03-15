import React from 'react'
import { GrClose } from 'react-icons/gr'


const CartItem = props => {
  return (
    <div className='my-8 flex border border-black border-box'>
      <img className='w-1/3' src={"src/assets/details/"+props.name+"/main.webp"}/>
      <div className='m-4 relative w-full'>
        <div className='w-full'>
          <div className='flex justify-between'>
            <p>{props.name}</p>
            <p className='pr-8'>${props.price}</p>
          </div>
          <p>COLOR/COLOR/COLOR</p>
          <p>SIZE: insert size here</p>
          <button className='absolute right-0 top-0 hover:opacity-50' onClick={props.remove}>
            <GrClose/>
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default CartItem