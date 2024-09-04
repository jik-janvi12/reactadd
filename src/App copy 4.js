import axios from 'axios'
import React, { useState } from 'react'

function App() {
  const [data ,setData]=useState([])
  function Dataview() {
     axios.get('https://jsonplaceholder.typicode.com/albums')
     .then((res) =>{
      setData(res.data)
      console.log(res.data);
     })
     .catch((error) =>{
      console.log(error);
     })
  }
  Dataview()

  return (
    <>
    <h1>API coling</h1>
    <table border={1}>
      <tr>
        <td>userId</td>
        <td>id</td>
        <td>title</td>
        
      </tr>
      {
        data.map((item ,index) =>(
          <tr>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
          </tr>
        ))
      }
    </table>
    </>
  )
}
export default App