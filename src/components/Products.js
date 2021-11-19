import { connect } from "react-redux";
import React from "react";

import { Link } from "react-router-dom";
import {Container,Row,Col} from 'react-bootstrap'
import Product from "./Product";
import PropTypes from 'prop-types'

const Products =({products}) =>{
    const renderedProducts =  products.map((p)=><Col sm={6} lg={3}> <Product key={p.name} name={p.name} image={p.image}  price={p.price}  /> </Col>)
    return(
     <div className='products'>
        <Container>
        <Link to='/add'> add product  </Link>
            <Row>
            {renderedProducts}
            </Row>
            
        </Container>
     </div>
    )
}
Products.propTypes=({
    products:PropTypes.array
  })
const mapStateToProps = state=>{
    return {products:state.products}
    }
export default connect(mapStateToProps)(Products)