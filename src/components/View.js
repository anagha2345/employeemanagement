import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';

function View() {

  //state to store data
const [employee,setEmployee]=useState({})

 const params=useParams()
  const fetchEmp=async ()=>{
    const result=await axios.get('http://localhost:8000/getAnEmp/'+params.id)
    setEmployee(result.data.employee);
  }
  console.log(employee);
  useEffect(()=>{
    fetchEmp()
  },[])
  return (
    <div className='container'>
      <h1>Employee Management App</h1>
        <p className='container'>Employee management is the process by which employers ensure workers perform their jobs to the best of their abilities so as to achieve business goals. It typically entails building and maintaining healthy relationships with employees, as well as monitoring their daily labor and measuring progress.
        Employee management is the process by which employers ensure workers perform their jobs to the best of their abilities so as to achieve business goals. It typically entails building and maintaining healthy relationships with employees, as well as monitoring their daily labor and measuring progress.
        </p>
      
        <Card  className='container w-50'>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title className='text-center'>{employee.uname}</Card.Title>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>Designation :{employee.designation}</ListGroup.Item>
          <ListGroup.Item>Age :{employee.age}</ListGroup.Item>
          <ListGroup.Item>Salary :{employee.salary}</ListGroup.Item>
        </ListGroup>
      </Card>
      
    </div>
  )
}

export default View