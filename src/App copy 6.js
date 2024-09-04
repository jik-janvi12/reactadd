import axios from 'axios'
import { Formik ,Form ,Field } from 'formik'
import React, { useEffect, useState } from 'react'

function App() {
  const [data ,setData]=useState([])
  useEffect(() =>{
    Dataview()
  },[])
  function Dataview() {
    axios.get('https://service.apikeeda.com/api/v1/contact-book',{
     headers: {
      "x-apikeeda-key": 'z1720150086293fhm774077173lb'
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
  const handleSubmit =(values) =>{
    // console.log(values);
    axios.post('https://service.apikeeda.com/api/v1/contact-book',values,{
      headers :{
       "x-apikeeda-key":'z1720150086293fhm774077173lb'
      }
    })
    .then((res) =>{
      // setData(res.data.data)
      console.log('success');
      Dataview()
     })
     .catch((error) =>{
      console.log(error);
     })
  }
  return (
    <>
    <h2>Contact Book</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          mobileNo:'',
          email: '',
          nickName:'',
        }}
        // onSubmit={(values ,{resetForm}) =>{
        //     console.log(values);
        //      setData([...data ,values])
        //      resetForm()
        //   }}
        onSubmit={handleSubmit}
      >
        <Form>
            FirstName:-<Field type='text' name="firstName"></Field>
            <br /><br />
            LastName:-<Field type='text' name="lastName"></Field>
            <br /><br />
            MobileNo:-<Field type='text' name="mobileNo"></Field>
            <br /><br />
            Email:-<Field type='text' name="email"></Field>
            <br /><br />
            NickName:-<Field type='text' name="nickName"></Field>
            <br /><br />
            Submit:-<button type='submit'>submit</button>
        </Form>
      </Formik>
      <table border={1}>
        <tr>
          <td>firstName</td>
          <td>lastName</td>
          <td>mobileNo</td>
          <td>email</td>
          <td>nickName</td>
        </tr>
        {
          data.map((item ,index) =>(
            <tr key={index}>
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
// import axios from 'axios'
// import { Formik ,Form ,Field } from 'formik'
// import React, { useEffect, useState } from 'react'
// function App() {
//   const [data ,setData]=useState([])
//   const [initialvalues ,setInitialValues]=useState({
//     title:'',
//     date:'',
//     description:'',
//   })
//   const [edtiId ,setEditId] =useState(null)
//   useEffect(() =>{
//     Dataview()
//   },[])
//         function Dataview() {
//           axios.get('https://service.apikeeda.com/api/v1/notes',{
//           headers: {
//             "x-apikeeda-key": 'i1720668263772hdt319203462gk'
//           }
//           })
//           .then((res) =>{
//           setData(res.data.data)
//           console.log(res.data.data);
//           })
//           .catch((error) =>{
//           console.log(error);
//           })
//       }
//       const datadelete = (id) =>{
//           // console.log(id);
//           axios.delete('https://service.apikeeda.com/api/v1/notes/'+id ,{
//             headers: {
//               "x-apikeeda-key": 'i1720668263772hdt319203462gk'
//             }
//           })
//           .then((res) =>{
//             console.log(res);
//             Dataview()
//           })
//           .catch((error) =>{
//             console.log(error);
//           })
//       }
//       const handleSubmit = (values) =>{
//             // console.log(values);
//             if (edtiId!== null) {
//               axios.patch(`https://service.apikeeda.com/api/v1/notes/${edtiId}`,values,{
//                 headers: {
//                   "x-apikeeda-key": 'i1720668263772hdt319203462gk'
//                   }
//               })
//               .then((res) =>{
//                 console.log(res);
//                 Dataview()
//               })
//               .catch((error) =>{
//                 console.log(error);
//               })
//             }
//             else{
//                   setEditId(null)
//             }
//             axios.post('https://service.apikeeda.com/api/v1/notes',values,{
//               headers: {
//               "x-apikeeda-key": 'i1720668263772hdt319203462gk'
//               }
//             })
//             .then((res) =>{
//               console.log(res);
//               Dataview()
//             })
//             .catch((error) =>{
//               console.log(error);
//             })
//       }
//       const editdata =(el,id) =>{
//         setInitialValues({
//           title:el.title,
//           date:el.date,
//           description:el.description
//         })
//         setEditId(null)
//       }

//   return (
//     <>
//     <Formik
//     enableReinitialize
//     initialValues={initialvalues}
  
//     onSubmit={handleSubmit}
//     >
//       <Form>
//         title:- <Field type='text' name="title"></Field><br /><br />
//         date:- <Field type='date' name="date"></Field><br /><br />
//         description:- <Field type='text' name="description"></Field><br /><br />
//         <button type='submit'>Submit</button>
//       </Form>
//     </Formik>
//    <table border={1}>
//     <tr>
//       <td>Title</td>
//       <td>Date</td>
//       <td>Description</td>
//       <td>Delete</td>
//       <td>Edit</td>
//     </tr>
//     {
//           data.map((item ,index,el) =>(
//             <tr key={index}>
//               <td>{item.title}</td>
//               <td>{item.date}</td>
//               <td>{item.description}</td>
//               <td>
//                 <button onClick={() =>datadelete(item._id)}>delete</button>
//               </td>
//               <td>
//                 <button onClick={() =>editdata(el,el._id)}>Edit</button>
//               </td>
//             </tr>
//           ))
//     }
//    </table>
//     </>
//   )
// }
// export default App