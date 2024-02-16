import React, {useState} from 'react'

export default function Addtocart() {


const [counter,setcounter]=useState(0)    


const increasevalue=()=>{setcounter(counter+1)}
const decreasevalue=()=>{setcounter(counter-1)}
  return (
    <>


    {
        counter>0 ?  <div className="container text-center">
        <div><button className='btn btn-dark mx-2' onClick={increasevalue}>+</button></div>
        <div>{counter}</div>
        <div><button className='btn btn-dark mx-2' onClick={decreasevalue}>-</button></div>
    </div>  

    :
    <div><button className='btn btn-dark mx-2' onClick={increasevalue}>ADD TO CART</button></div>

    }
    
    
    
    
    </>
  )
}
