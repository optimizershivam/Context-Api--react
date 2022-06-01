import React from 'react'
import Cart from "./Cart"
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Product = () => {
  // const condition=true
   const {isauthorized}= useContext(AuthContext)
  return (
    // <div>Product:{condition ? "logedin" : "logedout"}
    //   <Cart/>
    // </div>
    <div>Product:{isauthorized ? "logedin" : "logedout"}
      <Cart/>
    </div>
  )
}

export default Product