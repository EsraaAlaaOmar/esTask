import React from "react";
import {Container,Row,Col} from 'react-bootstrap'
import{BsHeart,BsPlusLg}from "react-icons/bs"

const Product =() =>{
    return(
  <div>
    <div className='product'>
          
          <h5>details</h5>
          <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZLODnJfDTlFvk_x3bUHEn4nHwZYtQB4x4g&usqp=CAU' />
          <br />
          <span>Price </span>
          <div className='action'>
            <Row>
              <Col>
                  <BsPlusLg />
                  <span>
                    &nbsp; card
                  </span>
              </Col>
              <Col>
                 <div className='rtl'>
                   <span>
                    Wishlist
                   </span>
                   &nbsp;
                   <BsHeart />
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