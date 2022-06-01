
import React,{useReducer}from "react"

const reducer =(counter,action)=>{
  switch(action.type){
    case"increment":{
      return counter+1
    }
    case"decrement":{
      return counter-1
    }
    default:{
      console.log(action.type)
      return counter
    }
    
  }
}

function App1() {
  const [counter,dispatch]=useReducer(reducer,0)
  return (
    <div>
     counter:{counter}
     <div>
       <button onClick={()=>dispatch({type:"decrement"})}>-</button>
       <button onClick={()=>dispatch({type:"increment"})}>+</button>
     </div>
    </div>
  );
}

export default App1;
