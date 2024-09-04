//GST invoice API
import axios from 'axios'
import { Formik ,Form ,Field } from 'formik'
import React, { useEffect, useState } from 'react'
function App() {
  const [data ,setData]=useState([])
  const [initialvalues ,setInitialValues]=useState({
    name:'',
    gstno:'',
    baseamount:'',
    gstpercentage:'',
    totalamount:'',
    invoiceno:'',
  })
  const [editId ,setEditId] =useState(null)
  useEffect(() =>{
    Dataview()
  },[])
        function Dataview() {
          axios.get('https://service.apikeeda.com/api/v1/gst-invoice',{
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
          axios.delete('https://service.apikeeda.com/api/v1/gst-invoice/'+id ,{
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
              axios.patch(`https://service.apikeeda.com/api/v1/gst-invoice/${editId}`,values,{
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
              axios.post('https://service.apikeeda.com/api/v1/gst-invoice',values,{
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
          name:item.name,
          gstno:item.gstno,
          baseamount:item.baseamount,
          gstpercentage:item.gstpercentage,
          totalamount:item.totalamount,
          invoiceno:item.invoiceno,
        })
        setEditId(id)
      }

  return (
    <>
    <h2>GST Invoice API</h2>
    <Formik
    enableReinitialize
    initialValues={initialvalues}
  
    onSubmit={handleSubmit}
    >
      <Form>
        name:- <Field type='text' name="name"></Field><br /><br />
        gstno:- <Field type='text' name="gstno"></Field><br /><br />
        baseamount:- <Field type='text' name="baseamount"></Field><br /><br />
        gstpercentage:- <Field type='text' name="gstpercentage"></Field><br /><br />
        totalamount:- <Field type='text' name="totalamount"></Field><br /><br />
        invoiceno:- <Field type='text' name="invoiceno"></Field><br /><br />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
   <table border={1}>
    <tr>
      <td>name</td>
      <td>gstno</td>
      <td>baseamount</td>
      <td>gstpercentage</td>
      <td>totalamount</td>
      <td>invoiceno</td>
      <td>Delete</td>
      <td>Edit</td>
    </tr>
    {
          data.map((item ,index) =>(
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.gstno}</td>
              <td>{item.baseamount}</td>
              <td>{item.gstpercentage}</td>
              <td>{item.totalamount}</td>
              <td>{item.invoiceno}</td>
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
