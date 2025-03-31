import { useEffect, useState } from 'react'
import './App.css'
import ProductCard from './ProductCard/ProductCard';
import { Button, Container, Row } from 'react-bootstrap';

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProductList(data);
    }
    fetchProduct();
  }, [])

  // DEBUG LOG
  // console.log(productList);

  async function handleAddProduct () {
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
    const data = await response.json();
    return alert(`Le produit avec l'id ${data.id} a été créé`);
  };

  return (
    <>
      <Container>
        <Button onClick={handleAddProduct}>Ajouter un produit</Button>
        <Row className='g-3 justify-content-center'>
          {productList.map((product, index) => 
            <ProductCard 
              key={index}
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
