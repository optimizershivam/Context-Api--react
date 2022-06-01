import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  // const {count,setcount}=useContext(CartContext)
  const {addtocart}=useContext(CartContext)
  return (
    <div>Cart
      {/* <button onClick={()=>setcount(count+1)}>add to Cart</button> */}
      <button onClick={addtocart}>add to Cart</button>
    </div>
  )
}

export default Cart