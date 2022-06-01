import { useState } from "react";
import { createContext } from "react";

export const AuthContext=createContext()

export const AuthProvider =({children})=>{
    const [isauthorized,setisauthorized]=useState(false)

    const login=(username,password)=>{
        console.log(username,password)
        if(username && password){
            setisauthorized(true)
        }
    }

    const logout=()=>{
        setisauthorized(false)
    }
    return (
        <AuthContext.Provider value={{isauthorized,login,logout}}>{children}</AuthContext.Provider>
    )
}