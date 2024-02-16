import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Registration() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [address, setaddress] = useState("")
  const [adresstwo, setadresstwo] = useState("")
  const [city, setcity] = useState("")
  const [states, setstates] = useState("")
  const [zip, setzip] = useState("")
  const[skill,setskill]=useState([])

  const handleSkillChange = (e) => {  //yahan pe e as a parameter liya ja raha 
    const { value, checked } = e.target;              //e.target se real time value mungwaty thy na hum, abhi mungwa rhy value=html & t/f checked or not
    setskill((prevSkill) =>   // ab hum apny set skills function ko change kr rhy 
      checked ? [...prevSkill, value] : prevSkill.filter((skill) => skill !== value)//true: purani,abhi jo ha //false: skill=skill not equal to value and by filter agar not equal to hota to wo element filtered ho kr skip hojata
    );
  }
  const marzi = (e) => {
    e.preventDefault();
    const obj1 = {email,password,address,adresstwo,city,zip,skills,states}
    console.log(obj1)
  }
  return (
    <>
      <Form onSubmit={marzi}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setemail(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" onChange={(e) => setaddress(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" onChange={(e) => setadresstwo(e.target.value)} />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control onChange={(e) => setcity(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose..." onChange={(e) => setstates(e.target.value)}>
              <option>Balochistan</option>
              <option>Khyber</option>
              <option>Sindh</option>
              <option>Punjab</option>
            </Form.Select>


          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control onChange={(e) => setzip(e.target.value)} />
          </Form.Group>
        </Row>

        <Form.Group>
        <label>
        <input
          type="checkbox"
          value="HTML"
          checked={skill.includes('HTML')}   //.includes returns true and false kya skills main html hai?
          onChange={handleSkillChange}      //on change pe function call ho raha 
        />
        HTML
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="CSS"
          checked={skill.includes('CSS')}
          onChange={handleSkillChange}
        />
        CSS
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="JS"
          checked={skill.includes('JS')}
          onChange={handleSkillChange}
        />
        JavaScript
      </label>
      <br />
      <p>Selected Skills: {skill.join(', ')}</p>


        </Form.Group>

      </Form>



    </>
  )
}


