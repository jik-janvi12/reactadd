import axios from 'axios'
import React, { useState } from 'react'

function App(params) {
  const [data ,setData]=useState([])
  function Dataview() {
     axios.get('https://jsonplaceholder.typicode.com/todos')
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
        <td>completed</td>
      </tr>
      {
        data.map((item ,index) =>(
          <tr>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.completed}</td>
          </tr>
        ))
      }
    </table>
    </>
  )
}
export default App