import axios from 'axios';
import {React,useState,useEffect} from 'react'
import { Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';



function Add() {
  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [age,setAge]=useState(0)
  const [designation,setDesignation]=useState('')
  const [salary,setSalary]=useState(0)

  useEffect(()=>{
    setId(uuid().slice(0,3))                   //uuid is only needed when it is called but the first value may be empty so need to inwoke at the start
  },[])
  // console.log(uname);
  //any variable can use in the place of  e .....
  let location=useNavigate()
  const addEmployee=async(e)=>{
    e.preventDefault()                 //to prevent refreshing of data  or it prevent multiple working     
  //  console.log(uname);
  //  console.log(age);
  //  console.log(designation);
  //  console.log(salary);
  //  console.log(uuid().slice(0,3));
       setId(uuid().slice(0,3))
       const body={
        id,uname,age,designation,salary
       }
      
       const result=await axios.post('http://localhost:8000/addEmployee',body)
       alert(result.data.message)
       location('/')

  }
  
  return (
    <div>
       <h1>Employee Management App</h1>
        <p className='container'>Employee management is the process by which employers ensure workers perform their jobs to the best of their abilities so as to achieve business goals. It typically entails building and maintaining healthy relationships with employees, as well as monitoring their daily labor and measuring progress.
        Employee management is the process by which employers ensure workers perform their jobs to the best of their abilities so as to achieve business goals. It typically entails building and maintaining healthy relationships with employees, as well as monitoring their daily labor and measuring progress.
        </p>
        <h3 className='text-center'>Add new Employee</h3>
        <Form className='container w-50 '>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      
        <Form.Control onChange={(e)=>setUname(e.target.value)} type="text" placeholder="Employee name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
       
        <Form.Control onChange={(a)=>setAge(a.target.value)} type="text" placeholder="Age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
       
        <Form.Control onChange={(e)=>setDesignation(e.target.value)} type="text" placeholder="Designation" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
       
        <Form.Control onChange={(e)=>setSalary(e.target.value)} type="text" placeholder="Salary" />
      </Form.Group>
      <Button className='m-1' onClick={(b)=>addEmployee(b)}>Add</Button>
      <Link to={'/'}><Button className='m-1' variant="warning">Cancel</Button></Link>
      
    </Form>

    </div>
  )
}

export default Add