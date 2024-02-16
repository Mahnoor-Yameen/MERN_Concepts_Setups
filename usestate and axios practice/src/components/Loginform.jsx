import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Loginform() {

    
    
    // const email = "email@gmail.com"
    // const demo=(val)=>{console.log(val)}
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")

    

const marzi=(k)=>{
    k.preventDefault();
    const obj1 = {email,password}
    console.log(obj1)
}
  return (
    <>   +
    <Form onSubmit={marzi} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(k)=>setemail(k.target.value)} />
        <Form.Text className="text-muted">
          {email}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(k)=>setpassword(k.target.value)} />
        <Form.Text className="text-muted">
          {password}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  
    
    
    </>
  )
}


