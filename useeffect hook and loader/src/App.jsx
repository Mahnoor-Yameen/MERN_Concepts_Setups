import React, { useState, useEffect } from 'react'
import Itemcard from './components/Itemcard'

export default function App() {

  const [users, setusers] = useState([])
  // const[counter,setcounter]=useState(0)

  // useEffect(()=>{console.log("hello")},[counter])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json() )
      .then((data) => setusers(data) )
      .catch((error) =>  console.log(error) )
  },[])

  return (
    <>
      {/* <div className="container my-5 text-center">
    
    <div><button className="btn btn-dark mx-2" onClick={()=>setcounter(counter+1)}>ADD +</button></div>
      <div>Our counter number: {counter}</div>
    <div><button className="btn btn-dark mx-2" onClick={()=>setcounter(counter-1)}>SUBTRACT -</button></div>

    </div> */}

      <div className="container">
        <h2 className='text-center my-5'>USERS</h2>
        <div className="row gap-5">
          
          {

            users.map((user,index) => {
              return (
                <Itemcard key={index} data={user}/>
              )
            })

          }



        </div>
      </div>




    </>
  )
}
