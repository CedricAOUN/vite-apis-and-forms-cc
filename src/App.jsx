import { useEffect, useState } from 'react'
import './App.css'
import ProductCard from './ProductCard/ProductCard';
import { Container, Row } from 'react-bootstrap';

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
  console.log(productList);

  return (
    <>
      <Container>
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
