import { connect } from "react-redux";
import React from "react";

import { Link } from "react-router-dom";
import {Container,Row,Col} from 'react-bootstrap'
import Product from "./Product";
import PropTypes from 'prop-types'

const Products =({products}) =>{
    const renderedProducts =  products.map((p)=><Col sm={6} lg={3}> <Product key={p.name} name={p.name} image={p.image}  price={p.price} 
    fImage={p.fImage} secImage={p.secImage} thirImage={p.thirImage}
    /> </Col>)
    return(
     <div className='products'>
        <Container>
        <div >
         <Link to='/add'><span className='link'> Add Product  </span></Link>
        </div>
        <div className='productsElements'>
            <Row>
            {renderedProducts}
            </Row>
            </div>
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