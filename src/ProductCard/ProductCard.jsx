import React from 'react'
import { Card } from 'react-bootstrap'
import './productCard.css'

function ProductCard({ title, imgURL, desc, price}) {
  return (
    <Card className='flex-grow-1'>
      <Card.Img variant="top" src={imgURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <p>{price}€</p>
      </Card.Body>
    </Card>
  )
}

export default ProductCard