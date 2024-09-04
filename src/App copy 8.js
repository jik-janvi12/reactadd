// import axios from 'axios'
// import { Formik ,Form ,Field } from 'formik'
// import React, { useEffect, useState } from 'react'

// function App() {
//   const [data ,setData]=useState([])
//   const [initialvalues ,setinitiavalues] =useState ({
//       firstName: '',
//       lastName: '',
//       mobileNo:'',
//       email: '',
//       nickName:'',
//   })
//   const [editId ,setEditId]=useState(null) 
//   useEffect(() =>{
//     Dataview()
//   },[])
//   function Dataview() {
//     axios.get('https://service.apikeeda.com/api/v1/contact-book',{
//      headers: {
//       "x-apikeeda-key": 'k1720753837166dpy335108429iy'
//    }
//     })
//     .then((res) =>{
//      setData(res.data.data)
//      console.log(res.data.data);
//     })
//     .catch((error) =>{
//      console.log(error);
//     })
//  }
//   const handleSubmit =(values) =>{
//     // console.log(values);
//     if (editId !==null) {
//       axios.patch(`https://service.apikeeda.com/api/v1/contact-book/${editId}`,values,{
//         headers: {
//           "x-apikeeda-key": 'k1720753837166dpy335108429iy'
//           }
//       })
//       .then((res) =>{
//         console.log(res);
//         Dataview()
//       })
//       .catch((error) =>{
//         console.log(error);
//       })
//     }
//     axios.post('https://service.apikeeda.com/api/v1/contact-book',values,{
//       headers :{
//        "x-apikeeda-key":'k1720753837166dpy335108429iy'
//       }
//     })
//     .then((res) =>{
//       // setData(res.data.data)
//       // console.log('res');
//       Dataview()
//      })
//      .catch((error) =>{
//       console.log(error);
//      })
//   }
//   const datadelete = (id) =>{
//     // console.log(id);
//     axios.delete('https://service.apikeeda.com/api/v1/contact-book/'+id ,{
//       headers: {
//         "x-apikeeda-key": 'k1720753837166dpy335108429iy'
//       }
//     })
//     .then((res) =>{
//       console.log(res);
//       Dataview()
//     })
//     .catch((error) =>{
//       console.log(error);
//     })
//   }
//   const dataedit = (el,id) =>{
//       setinitiavalues({
//           firstName: el.firstName,
//           lastName: el.lastName,
//           mobileNo: el.mobileNo,
//           email: el.email,
//           nickName:el.nickName,
//       })
//       setEditId(id)
//   }
//   return (
//     <>
//     <h2>Contact Book</h2>
//       <Formik
//         // initialValues={{
//         //   firstName: '',
//         //   lastName: '',
//         //   mobileNo:'',
//         //   email: '',
//         //   nickName:'',
//         // }}
//         // onSubmit={(values ,{resetForm}) =>{
//         //     console.log(values);
//         //      setData([...data ,values])
//         //      resetForm()
//         //   }}
//         enableReinitialize
//         initialValues={initialvalues}
//         onSubmit={handleSubmit}
//       >
//         <Form>
//             FirstName:-<Field type='text' name="firstName"></Field>
//             <br /><br />
//             LastName:-<Field type='text' name="lastName"></Field>
//             <br /><br />
//             MobileNo:-<Field type='text' name="mobileNo"></Field>
//             <br /><br />
//             Email:-<Field type='text' name="email"></Field>
//             <br /><br />
//             NickName:-<Field type='text' name="nickName"></Field>
//             <br /><br />
//             Submit:-<button type='submit'>submit</button>
//         </Form>
//       </Formik>
//       <table border={1}>
//         <tr>
//           <td>firstName</td>
//           <td>lastName</td>
//           <td>mobileNo</td>
//           <td>email</td>
//           <td>nickName</td>
//           <td>Delete</td>
//           <td>Edit</td>
//         </tr>
//         {
//           data.map((item ,index,el) =>(
//             <tr key={index}>
//               <td>{item.firstName}</td>
//               <td>{item.lastName}</td>
//               <td>{item.mobileNo}</td>
//               <td>{item.email}</td>
//               <td>{item.nickName}</td>
//               <td>
//                 <button onClick={() =>datadelete(item._id)}>Delete</button>
//               </td>
//               <td>
//                 <button onClick={() =>dataedit(el,el._id)}>Edit</button>
//               </td>
//             </tr>
//           ))
//         }
//       </table>
//     </>
//   )
// }
// export default App

//======================================

// ========================================
//NOTICE API
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
      const handleSubmit = (values ,{resetForm}) =>{
            // console.log(values);
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
            resetForm()  
      }
      const editdata =(item,id) =>{
        setInitialValues({
          title:item.title,
          date:item.date,
          description:item.description
        })
        setEditId(id)
      }

  return (
    <>
    <h2>Notes API</h2>
    <Formik
    enableReinitialize
    initialValues={initialvalues}
  
    onSubmit={handleSubmit}
    >
      <Form>
        title:- <Field type='text' name="title"></Field><br /><br />
        date:- <Field type='text' name="date"></Field><br /><br />
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
          data.map((item ,index) =>(
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
