import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CartItem from '../components/Cart/CartItem'
import ButtonStretch from '../components/Buttons/ButtonStretch'
import OrderSummary from '../components/Cart/OrderSummary'


const Cart = () => {
  const [items, setItems] = useState("")
  const [cart, setCart] = useState(localStorage.getItem('itemList'))
  function loadCart(){
    axios.get("/api/getCart/"+cart)
    .then(
    (data)=>{
      setItems(data)
      console.log(data.data)
    })
  }

  useEffect(()=>{
    loadCart()
  },[cart])

  function handleRemove(value){
    const dataArray = localStorage.getItem('itemList').split(",");
    const filteredDataArray = dataArray.filter((item) => item !== value);
    const updatedData = filteredDataArray.join(",");
    localStorage.setItem("itemList", updatedData);
    updatedData != ""? setCart(updatedData) : setItems("")
  }

  function totalPrice(){
    const total = items.data?.reduce((total, object) => {
      return total + object['price']
    },0)  
    return "$"+ (total !== undefined? total : 0);
  }

  return (
    <div className='px-80 py-16 justify-center flex gap-16'>
      <div className='w-2/3 h-screen'>
        <div className=''>
          <h1 className='font-bold text-4xl py-2'>YOUR BAG</h1>
          <p className='py-3'>TOTAL: {items.data?.length} items <b>{totalPrice()}</b></p>
          <p>Items in your bag are not reserved — check out now to make them yours.</p>
          {items && items?.data?.map((p)=>
            (<CartItem name={p.productName} price={p.price} remove={() => {handleRemove(p.productName)}}/>)
          )}
          
        </div>
      </div>
      <div className='w-1/3 h-screen'>
        <Link className='w-full invert relative'>
          <ButtonStretch text="CHECK OUT"/>
        </Link>
        <OrderSummary amount={items.data?.length} total={totalPrice()}/>
      </div>
    </div>
  )
}

export default Cart