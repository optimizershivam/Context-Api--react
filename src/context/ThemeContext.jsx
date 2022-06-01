import { createContext, useState } from "react";


export const Themecontext=createContext()
export const ThemeProvider =({children})=>{

    const [theme,settheme]=useState("light")

const toggletheme=()=>{
    if(theme==="light"){
        settheme("dark")
    }
    else{
        settheme("light")
    }
}

    return (
        <Themecontext.Provider 
        value={{
            theme,
            islight : theme==="light",
            toggletheme
        }
    }>{children}</Themecontext.Provider>
    )
}