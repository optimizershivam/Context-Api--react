import React from 'react'
import Wishlist from './Wishlist'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Themecontext } from '../context/ThemeContext'

const Navbar = () => {
  const {isauthorized,login,logout}= useContext(AuthContext)

  const {buy}= useContext(CartContext)

  const { islight,toggletheme}= useContext(Themecontext)

  return (
    <div>Navbar
      <button onClick={()=>{
        if(isauthorized){
          logout()
        }else{
           login("r","z")
        }
       }
        }>{isauthorized ? "logout" : "login" }
      </button>

      <button onClick={buy}>buy</button>

      <button onClick={toggletheme}>{`make ${islight ? "dark" : "light"}`}</button>

        {isauthorized && <Wishlist/>}

    </div>
  )
}

export default Navbar