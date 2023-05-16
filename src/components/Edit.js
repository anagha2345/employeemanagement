import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useParams,useNavigate } from 'react-router-dom';

function Edit() {


  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [age,setAge]=useState('')
  const [designation,setDesig]=useState('')
  const [salary,setSalary]=useState('')
  //object for hook
  const params=useParams()
  let location=useNavigate()
  const fetchEmp=async ()=>{
    const result=await axios.get('http://localhost:8000/getAnEmp/'+params.id)
    console.log(result.data.employee);

    setId(result.data.employee.id)
    setUname(result.data.employee.uname)
    setAge(result.data.employee.age)
    setDesig(result.data.employee.designation)
    setSalary(result.data.employee.salary)

    console.log(salary);
    // console.log(uname);
  }
  const handleUpdate=async (e)=>{
    e.preventDefault()
    const body={
      id,
      uname,
      age,
      designation,
      salary
    }
   const result=await axios.post('http://localhost:8000/editEmp',body)
   alert(result.data.message)
   location('/')
  }
  useEffect(()=>{
    fetchEmp()
  },[])
  return (
    <div>
       <h1>Employee managment </h1>
        <p className='container'>Employee management is the process by which employers ensure workers perform their jobs to the best of their abilities so as to achieve business goals. It typically entails building and maintaining healthy relationships with employees, as well as monitoring their daily labor and measuring progress.
        Employee management is the process by which employers ensure workers perform their jobs to the best of their abilities so as to achieve business goals. It typically entails building and maintaining healthy relationships with employees, as well as monitoring their daily labor and measuring progress.
        </p>
        <h3 className='text-center'>Edit Employee</h3>
        <Form className='container w-50 '>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Employee name</Form.Label>
        <Form.Control type="text" value={uname} onChange={(e)=>setUname(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
      <Form.Label>Age</Form.Label>
        <Form.Control  type="text" value={age} onChange={(e)=>setAge(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
       <Form.Label>Designation</Form.Label>
        <Form.Control  type="text" value={designation} onChange={(e)=>setDesig(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
      <Form.Label>Salary</Form.Label>
        <Form.Control type="text" value={salary} onChange={(e)=>setSalary(e.target.value)}/>
      </Form.Group>
      <Link to={'/'}><Button onClick={(e)=>handleUpdate(e)} className='m-1' >update</Button></Link>
      
    </Form>

    </div>
  )
}

export default Edit