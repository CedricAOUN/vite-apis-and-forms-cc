import { useEffect, useState } from 'react'
import './App.css'
import ProductCard from './ProductCard/ProductCard';
import { Container } from 'react-bootstrap';

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
      <Container className='d-flex flex-wrap gap-2'>
        {productList.map((product) => 
          <ProductCard 
            title={product.title} 
            imgURL={product.image} 
            desc={product.description} 
            price={product.price} 
          />
        )}
      </Container>
    </>
  )
}

export default App
