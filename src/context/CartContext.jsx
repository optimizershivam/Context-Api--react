import React,{createContext,useState} from "react";
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


export const CartContext=createContext();

export const CartProvider=({children})=>{
   const {isauthorized}= useContext(AuthContext)
    
const [count,setcount]=useState(0)
//
const addtocart =()=>{
setcount(count+1)
}
//
const buy=()=>{
    // if user is loged in then and then only they can buy
    if(isauthorized){
        console.log("buy")
    }
    else{
        console.log("cant buy without login")
    }
}

    // return (
    // <CartContext.Provider value={{count,setcount}}>{children}</CartContext.Provider>
    // )

    // return (
    // <CartContext.Provider value={{count,addtocart}}>{children}</CartContext.Provider>
    // )

    return (
    <CartContext.Provider value={{count,addtocart,buy}}>{children}</CartContext.Provider>
    )
}