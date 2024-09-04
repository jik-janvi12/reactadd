import axios from 'axios'
import React, { useState } from 'react'

function App() {
  const [data ,setData]=useState([])
  function Dataview() {
     axios.get('https://service.apikeeda.com/contact-book',{
      headers: {
        Authorization : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MTk5ODAzNTg2NjctMzgxNjY5NjI5IiwiaWF0IjoxNzE5OTgwMzU4LCJleHAiOjE3MjAxNTMxNTh9.V1uLEPLVHf5p1WXsKHrPTAgjEa5UDYQ4-oWbGi5YO0Q'
    }
     })
     .then((res) =>{
      setData(res.data.data)
      console.log(res.data.data);
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
        <td>Id</td>
        <td>firstname</td>
        <td>lastname</td>
        <td>mobileno</td>
        <td>email</td>
        <td>nickname</td>
        
      </tr>
      {
        data.map((item ,index) =>(
          <tr key={index}>
            <td>{item._id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.mobileNo}</td>
            <td>{item.email}</td>
            <td>{item.nickName}</td>
          </tr>
        ))
      }
    </table>
    </>
  )
}
export default App