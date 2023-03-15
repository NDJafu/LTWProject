import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <Link to={"/cart"} className="flex items-center">
      <FaShoppingBag/>
    </Link>
  )
}

export default Cart