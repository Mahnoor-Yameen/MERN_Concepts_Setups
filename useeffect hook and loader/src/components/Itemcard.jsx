import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Itemcard(props) {
  return (
    <>
    {/* {console.log(props.data)} */}
    <div className="col-md-3">
    <Card>
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
    
    </>
  )
}
