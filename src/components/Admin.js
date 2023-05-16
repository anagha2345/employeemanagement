import React from 'react'
import './Admin.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';

function Admin() {
   const [allEmployees,setAllEmployees]=useState([])
   const fetchData=async ()=>{
    const result=await axios.get('http://localhost:8000/getAllEmployee')
    setAllEmployees(result.data.employees);
   }
   const handleDelete=async (id)=>{
  const result =await axios.delete('http://localhost:8000/deleteEmployee/'+id)
    alert(result.data.message)
    fetchData()
   }
   
  
   useEffect(()=>{
    fetchData()
   },[])

  return (
    <div>
      <div className='text-end mt-3 me-2'>
          <Link to={'/add'}><Button>Add employee</Button></Link>
      </div>
        <div className='container'>
          <h1 className='mb-3'>Employee Management App</h1>
          <p >Employee management is the process by which employers ensure workers perform their jobs to the best of their abilities so as to achieve business goals. It typically entails building and maintaining healthy relationships with employees, as well as monitoring their daily labor and measuring progress.
          Employee management is the process by which employers ensure workers perform their jobs to the best of their abilities so as to achieve business goals. It typically entails building and maintaining healthy relationships with employees, as well as monitoring their daily labor and measuring progress.
          </p>
        </div>

        <Table striped className='w-75 container'>
      <thead> 
        
            <tr> 
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        
        
      </thead>
      <tbody>
       
      {
          allEmployees?.map((item,index)=>(
           <tr>
          <td>{index+1}</td>
          <td>{item.uname}</td>
          <td>{item.age}</td>
          <td>{item.designation}</td>
          <td>{item.salary}</td>
          <td>
             <Link to={'view/'+item.id}><Button className='m-1 ' variant="primary"><i class="fa-solid fa-book-open-reader"></i> View</Button></Link>
         <Link to={'edit/'+item.id}> <Button className='m-1 ' variant="secondary"><i class="fa-solid fa-user-pen"></i> Edit</Button></Link>
          <Button className='m-1 ' onClick={()=>handleDelete(item.id)} variant="warning"><i class="fa-solid fa-user-xmark"></i> Delete</Button>
          
          </td>
        </tr>
          ))}
        
         
      </tbody>
    </Table>
    </div>
  )
}

export default Admin