import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const 
App = () => {
  // Data fetched by fetch API


  // const getData =async ()=>{
  //   // console.log('Data Fetched')
  //   const data = await fetch('https://jsonplaceholder.typicode.com/posts/')
  //   // console.log(data);

  //   const respose = await data.json()
  //   console.log(respose);
    
  // }


  // Data fetched by axios
  // const getData = async ()=>{
  //   console.log('Nachoooo')
    
  //   // const respose = await axios.get('https://jsonplaceholder.typicode.com/posts/')
  //   // console.log(respose.data);

  //   const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts/')
  //   console.log(data);


  // }


  const [data, setData] = useState([])

  const getData = async ()=>{
    console.log('Nachoooo')
    // const respose = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    // console.log(respose.data);
    const {data} = await axios.get('https://picsum.photos/v2/list')
    // console.log(data);
    setData(data)

  }


  return (
    <div>
      <button onClick={getData}>Click</button>
     <div>  
      {data.map((elem , idx)=>{
        return <h1>{idx} {elem.author}</h1>
      })}
     </div>
    </div>
  )
}

export default 
App