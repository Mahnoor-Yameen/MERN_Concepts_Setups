import React, {useState} from 'react'


// creating a counter
export default function Counter() {


const [counter,setcounter]=useState(0)


const increasevalue=()=>{setcounter(counter+1)}
const decreasevalue=()=>{setcounter(counter-1)}





  return (
    <>
    
    
    <div className="container">
        <div>{counter}</div>
        <div><button className='btn btn-dark' onClick={increasevalue}>+</button></div>
        <div><button className='btn btn-dark' onClick={decreasevalue}>-</button></div>
    </div>
    </>
  )
}
