import axios from 'axios'
import React, { useState } from 'react'

function App(params) {
  const [data ,setData]=useState([])
  function Dataview() {
     axios.get('https://jsonplaceholder.typicode.com/users')
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
        <td>id</td>
        <td>name</td>
        <td>username</td>
        <td>email</td>
        <td>address</td>
      </tr>
      {
        data.map((item ,index) =>(
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            {/* <td>{item.address}</td> */}
          </tr>
        ))
      }
    </table>
    </>
  )
}
export default App