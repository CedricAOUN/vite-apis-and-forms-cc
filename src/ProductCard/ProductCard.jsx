import React from 'react'
import { Button, Card, Col, Spinner } from 'react-bootstrap'
import './productCard.css'

function ProductCard({ id, title, imgURL, desc, price }) {
  async function handleEditProduct() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Produit mis à jour',
          price: 49.99,
          description: 'Description mise à jour',
          image: 'https://via.placeholder.com/150',
          category: 'electronics',
        }),
      });

      if(!response.ok) {
        throw new Error(`HTTP Error: ${response.status} - Message: ${response.statusText}`)
      }

      const data = await response.json();
      return alert(`Le produit avec l'id ${data.id} a été modifié`);
    } catch(err) {
      console.error(err);
    }
  }

  async function handleEditPrice() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price: 54.99,
        }),
      });

      if(!response.ok) {
        throw new Error(`HTTP Error: ${response.status} - Message: ${response.statusText}`)
      }

      const data = await response.json();
      return alert(`Le prix du produit avec l'id ${data.id} a été modifié`);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDeleteProduct() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE',
      });

      if(!response.ok) {
        throw new Error(`HTTP Error: ${response.status} - Message: ${response.statusText}`)
      }

      const data = await response.json();
      return alert(`Le produit avec l'id ${data.id} a été supprimé`);
    } catch (err) {
      console.error(err);
    }
  }

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
          <Button onClick={handleEditProduct}>Modifier le produit complet</Button>
          <Button onClick={handleEditPrice}>Modifier le prix du produit</Button>
          <Button onClick={handleDeleteProduct} variant='danger'>Supprimer le produit</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductCard