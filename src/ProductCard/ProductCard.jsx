import React from 'react'
import { Card, Col } from 'react-bootstrap'
import './productCard.css'

function ProductCard({ title, imgURL, desc, price}) {
  return (
    <Col lg={3} md={6} sm={12}>
      <Card className='h-100'>
        <Card.Img variant="top" src={imgURL} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {desc}
          </Card.Text>
          <p>{price}€</p>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductCard