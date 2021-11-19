import React from "react";
import products from '../data';

import {Container,Row,Col} from 'react-bootstrap'
import Product from "./Product";
const Products =() =>{
    const renderedProducts =  products.map((p)=><Col sm={6} lg={3}> <Product name={p.name} image={p.image}  price={p.price}  /> </Col>)
    return(
     <div>
        <Container>
            <Row>
            {renderedProducts}
            </Row>
        </Container>
     </div>
    )
}
export default Products