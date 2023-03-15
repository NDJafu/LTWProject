import React from 'react'

const OrderSummary = props => {
  return (
    <div className='mt-20'>
      <h1 className='font-bold text-lg'>ORDER SUMMARY</h1>
      <div className='grid grid-cols-2 gap-3 py-4'>
        <p>{props.amount} items</p>
        <p className='text-end'>{props.total}</p>
        <p>Sales Tax</p>
        <p className='text-end'>_</p>
        <p>Delivery</p>
        <p className='text-end'>FREE</p>
      </div>
      <div className='flex justify-between font-bold border-y border-slate-400 py-6'>
        <p>Total</p>
        <p>PRICE</p>
      </div>
    
    </div>
  )
}

export default OrderSummary