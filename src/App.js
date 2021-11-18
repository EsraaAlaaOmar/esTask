import './App.scss'

import Header from './components/Header';
import Product from './components/Product';
import products from './data';

import {Container,Row,Col} from 'react-bootstrap'


function App() {
  const renderedProducts =  products.map((p)=><Col sm={6} lg={3}> <Product /> </Col>)
  return (
   <div>

    <Header /> 
    <Container>
    <Row>
    {renderedProducts}
    </Row>
  </Container>
  </div>
  );
}

export default App;
