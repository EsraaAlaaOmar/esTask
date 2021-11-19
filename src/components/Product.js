import React from "react";
import {Container,Row,Col} from 'react-bootstrap'
import{BsHeart,BsPlusLg}from "react-icons/bs"
import products from "../data";

const Product =({name,image,price}) =>{


 const onClick = (value)=>{
  console.log(value)
 }
    return(
  <div>
    <div className='product'>
          
          <h5>{name}</h5>
          <img  src={image} />
          <br />
          <span>${price} </span>
          <div className='action'>
            <Row>
              <Col>
                  <button onClick={()=>onClick(name)}> 
                  <BsPlusLg  />
                  <span>
                    &nbsp; card
                  </span>
                  </button>
              </Col>
              <Col>
                 <div className='rtl'>
                   <span>
                    Wishlist
                   </span>
                   &nbsp;
                   <BsHeart  onClick={()=>onClick(name)}/>
                  </div>

              </Col>
          
          {/* <div></div> */}
           </Row>
          </div>
      </div>
   </div>
    )
}
export default Product