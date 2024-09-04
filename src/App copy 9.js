// CONTACT API
import axios from 'axios'
import { Formik ,Form ,Field } from 'formik'
import React, { useEffect, useState } from 'react'
function App() {
  const [data ,setData]=useState([])
  const [initialvalues ,setInitialValues]=useState({
    firstName:'',
    lastName:'',
    mobileNo:'',
    email:'',
    nickName:'',
  })
  const [editId ,setEditId] =useState(null)
  useEffect(() =>{
    Dataview()
  },[])
        function Dataview() {
          axios.get('https://service.apikeeda.com/api/v1/contact-book',{
          headers: {
            "x-apikeeda-key": 'i1720668263772hdt319203462gk'
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
      const datadelete = (id) =>{
          // console.log(id);
          axios.delete('https://service.apikeeda.com/api/v1/contact-book/'+id ,{
            headers: {
              "x-apikeeda-key": 'i1720668263772hdt319203462gk'
            }
          })
          .then((res) =>{
            console.log(res);
            Dataview()
          })
          .catch((error) =>{
            console.log(error);
          })
      }
      const handleSubmit = (values ,{resetForm}) =>{
            // console.log(values);
            if (editId !== null) {
              axios.patch(`https://service.apikeeda.com/api/v1/contact-book/${editId}`,values,{
                headers: {
                  "x-apikeeda-key": 'i1720668263772hdt319203462gk'
                  }
              })
              .then((res) =>{
                console.log(res);
                Dataview()
              })
              .catch((error) =>{
                console.log(error);
              })
            }
            else{
              axios.post('https://service.apikeeda.com/api/v1/contact-book',values,{
                headers: {
                "x-apikeeda-key": 'i1720668263772hdt319203462gk'
                }
              })
              .then((res) =>{
                console.log(res);
                Dataview()
              })
              .catch((error) =>{
                console.log(error);
              })
            }
            resetForm()
      }
      const editdata =(item,id) =>{
        setInitialValues({
          firstName:item.firstName,
          lastName:item.lastName,
          mobileNo:item.mobileNo,
          email:item.email,
          nickName:item.nickName,
        })
        setEditId(id)
      }

  return (
    <>
    <h2>Contact Book API</h2>
    <Formik
    enableReinitialize
    initialValues={initialvalues}
  
    onSubmit={handleSubmit}
    >
      <Form>
        firstName:- <Field type='text' name="firstName"></Field><br /><br />
        lastName:- <Field type='text' name="lastName"></Field><br /><br />
        mobileNo:- <Field type='text' name="mobileNo"></Field><br /><br />
        email:- <Field type='text' name="email"></Field><br /><br />
        nickName:- <Field type='text' name="nickName"></Field><br /><br />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
   <table border={1}>
    <tr>
      <td>firstName</td>
      <td>lastName</td>
      <td>mobileNo</td>
      <td>email</td>
      <td>nickName</td>
      <td>Delete</td>
      <td>Edit</td>
    </tr>
    {
          data.map((item ,index) =>(
            <tr key={index}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.mobileNo}</td>
              <td>{item.email}</td>
              <td>{item.nickName}</td>
              <td>
                <button onClick={() =>datadelete(item._id)}>delete</button>
              </td>
              <td>
                <button onClick={() =>editdata(item,item._id)}>Edit</button>
              </td>
            </tr>
          ))
    }
   </table>
    </>
  )
}
export default App
