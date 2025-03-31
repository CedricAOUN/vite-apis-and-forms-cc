import { useEffect, useState } from 'react'
import './App.css'
import ProductCard from './ProductCard/ProductCard';
import { Button, Container, Row, Spinner } from 'react-bootstrap';

function App() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');

        if(!response.ok) {
          throw new Error(`HTTP ERROR: ${response.status} - Message: ${response.statusText}`)
        }

        const data = await response.json();
        setProductList(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, [])

  // DEBUG LOG
  // console.log(productList);

  async function handleAddProduct () {
    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "USB 128GB",
          price: 49.99,
          description: "USB with 128GB of storage",
          image: "https://m.media-amazon.com/images/I/61T85CGI4ZL.jpg",
          category: "electronics",
        }),
      });

      if(!response.ok) {
        throw new Error(`HTTP ERROR: ${response.status} - Message: ${response.statusText}`)
      }

      const data = await response.json();
      return alert(`Le produit avec l'id ${data.id} a été créé`);
    } catch (err) {
      console.error(err);
    }
  };

  if(error) {
    return <p className='text-danger text-center'>{error.message}</p>
  }

  if(isLoading) {
    return (
      <Container className='d-flex justify-content-center align-items-center vh-100'>
        <Spinner animation="border" role="status" className='mx-auto text-center'>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    )
  }

  return (
    <>
      <Container>
        <Button onClick={handleAddProduct}>Ajouter un produit</Button>
        <Row className='g-3 justify-content-center'>
          {productList.map((product, index) => 
            <ProductCard 
              key={index}
              id={product.id}
              title={product.title}
              imgURL={product.image} 
              desc={product.description} 
              price={product.price}
            />
          )}
        </Row>
      </Container>
    </>
  )
}

export default App
