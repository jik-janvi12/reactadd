
// ========================================
import axios from 'axios'
import { Formik ,Form ,Field } from 'formik'
import React, { useEffect, useState } from 'react'
function App() {
  const [data ,setData]=useState([])
  const [initialvalues ,setInitialValues]=useState({
    title:'',
    date:'',
    description:'',
  })
  const [editId ,setEditId] =useState(null)
  useEffect(() =>{
    Dataview()
  },[])
        function Dataview() {
          axios.get('https://service.apikeeda.com/api/v1/notes',{
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
          axios.delete('https://service.apikeeda.com/api/v1/notes/'+id ,{
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
      const handleSubmit = (values) =>{
            console.log(values);
            if (editId !== null) {
              axios.patch(`https://service.apikeeda.com/api/v1/notes/${editId}`,values,{
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
            }
            axios.post('https://service.apikeeda.com/api/v1/notes',values,{
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
      const editdata =(item,id) =>{
        setInitialValues({
          title:item.title,
          date:item.date,
          description:item.description
        })
        // setEditId(id)
      }

  return (
    <>
    <Formik
    enableReinitialize
    initialValues={initialvalues}
  
    onSubmit={handleSubmit}
    >
      <Form>
        title:- <Field type='text' name="title"></Field><br /><br />
        date:- <Field type='date' name="date"></Field><br /><br />
        description:- <Field type='text' name="description"></Field><br /><br />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
   <table border={1}>
    <tr>
      <td>Title</td>
      <td>Date</td>
      <td>Description</td>
      <td>Delete</td>
      <td>Edit</td>
    </tr>
    {
          data.map((item ,index,el) =>(
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.date}</td>
              <td>{item.description}</td>
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
