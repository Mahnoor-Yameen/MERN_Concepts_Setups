import React, { useState, useEffect } from 'react'
import Registration from './components/Registration'
import Counter from './components/Counter'
import Addtocart from './components/Addtocart'
import Loginform from './components/Loginform'
import Skillchecklist from './components/Skillchecklist'
import axios from "axios"



export default function App() {

  //   const [myData, setMyData] = useState([]);   //khali array banaya taky data idher aye
  //   const [isError, setIsError] = useState("");  //for error detection

  //   // using Promises
  //   useEffect(() => {         //yeh lagaya taky componenet seperate reload ho
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")  //read kiya
  //       .then((response) => setMyData(response.data))  //response aya, usko humny setmydata ko de diya 
  //       .catch((error) => setIsError(error.message)); //error handling
  //   }, []);

  // //plz subscribe to thapa technical
  //   return (
  //     <>
  //       <h1>Axios Tutorial</h1>
  //       {isError !== "" && <h2>{isError}</h2>}  

  //       <div className="grid">   
  //         {myData.map((x) => {
  //           const { body, id, title } = x;
  //           return (
  //             <div key={id} className="card">
  //               <h2>{title}</h2>
  //               <p>{body}</p>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </>
  //   );



  //now by async and await
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const getMyPostData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data);
    }
    catch (error) {
      setIsError(error.message);

    }
  };

  useEffect(() => {
    getMyPostData();
  }, [])
  return (
    <>

      <h1>Axios Tutorial</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="grid">
        {myData.slice(0, 9).map((post) => {
          const { body, id, title } = post;
          return (
            <div key={id} className="card">
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  )
};

