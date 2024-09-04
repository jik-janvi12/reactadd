import { useState } from 'react';
import './App.css';
import { Formik, Field, Form } from 'formik';
function App() {
  const [data , setData] =useState([])
  const [initialValue , setinitialValue]= useState({name:'',surname:''})
  const [editId ,setEditId]=useState(null)
 const  Deletedata =(index) =>{
  // console.log(index);
  let copydata =[...data]
  copydata.splice(index ,1)
  setData(copydata)
 }
 const Editdata=(item,index) =>{
  // console.log(item);
  setinitialValue({
    name:item.name,
    surname:item.surname,
  })
  setEditId(index)
  
 }
  return (
    <>
      <Formik
        // initialValues={{  
        //   name:'',
        //   surname:'',
        // }}
        enableReinitialize
        initialValues={initialValue}
        // onSubmit={handledata}
        // ======1 step======
        // onSubmit={(values, {resetForm}) =>{
        //   // console.log(values);
        //    setData([...data ,values])
        //    resetForm()
        // }}
        onSubmit={(values ,{resetForm}) =>{
          // console.log(values);
          if(editId !== null){
              let editdata =[...data]
              editdata[editId]=values
              setData(editdata)
              setEditId(null)
          }
          else{
           setData([...data ,values])
          
          }
          resetForm()
        }}
      >
          <Form>
             name:- <Field type='text' name="name"></Field>
             <br /><br />
            surname:-<Field type='text' name="surname"></Field>
            <br /> <br />
            submit:-<button type='submit'>submit</button>
          </Form>
      </Formik>
      <table border={1}>
        <tr>
          <td>name</td>
          <td>surname</td>
          <td>Delete</td>
          <td>Edit</td>
        </tr>
        {
          data.map((item ,index) =>(
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>
                <button onClick={() =>Deletedata(index)}>Delete</button>
              </td>
              <td>
                <button onClick={() =>Editdata(item,index)}>Edit</button>
              </td>
            </tr>
          ))
        }
      </table>
    </>
  );
}

export default App;
// import React, { useState } from 'react';
// import { Formik, Form, Field } from 'formik';

// function App ()  {
//   const [editIndex, setEditIndex] = useState(null);

//   const initialValues = {
//     name: '',
//     email: '',
//   };

//   const handleAddUser = (values, { resetForm }) => {
//     const newUsers = [...users, values];
//     setUsers(newUsers);
//     resetForm();
//   };

//   const handleEditUser = (values, { resetForm }) => {
//     const newUsers = [...users];
//     newUsers[editIndex] = values;
//     setUsers(newUsers);
//     setEditIndex(null);
//     resetForm();
//   };

//   const handleDeleteUser = (index) => {
//     const newUsers = [...users];
//     newUsers.splice(index, 1);
//     setUsers(newUsers);
//   };

//   const handleEdit = (index, user) => {
//     setEditIndex(index);
//     // Initialize form with selected user data
//     initialValues.name = user.name;
//     initialValues.email = user.email;
//   };

//   return (
//     <div>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={editIndex !== null ? handleEditUser : handleAddUser}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <Field type="text" name="name" />
//             <Field type="email" name="email" />
//             <button type="submit" disabled={isSubmitting}>
//               {editIndex !== null ? 'Save' : 'Add'}
//             </button>
//           </Form>
//         )}
//       </Formik>
//       <ul>
//         {users.map((user, index) => (
//           <li key={index}>
//             {user.name} - {user.email}
//             <button onClick={() => handleEdit(index, user)}>Edit</button>
//             <button onClick={() => handleDeleteUser(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
