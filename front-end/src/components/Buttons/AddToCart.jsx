import React from 'react'

const AddToCart = props => {
  
  function handleAddToCart(e){
    e.preventDefault()
    var itemList = localStorage.getItem("itemList");
    var cart = [];
    if(!itemList){
      itemList = ""
    } else {
      cart = itemList.split(",");
    }
    if(cart.indexOf(props.item)==-1){
      cart.push(props.item)
      alert("Mua hang thanh cong")
    }
    localStorage.setItem("itemList",cart.join(','))
  }


  return (
    <div onClick={handleAddToCart} className='invert'>
      {props.children}
    </div>
  )
}

export default AddToCart