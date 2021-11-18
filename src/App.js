import './App.scss'

import Header from './components/Header';
import Product from './components/Product';
import {Container,Row,Col} from 'react-bootstrap'
function App() {
  return (
   <div>
    <Header /> 
    <Container>
    <Row>
      <Col>
     
        <Product />
      </Col>
      <Col>1 of 1</Col>
      <Col>1 of 1</Col>
      <Col>1 of 1</Col>
    </Row>
  </Container>
  </div>
  );
}

export default App;
