import React from "react";
import { connect } from "react-redux";
import {Container,Row,Col} from 'react-bootstrap'
import{BsHeart,BsPlusLg}from "react-icons/bs"
import products from "../data";
import {AddtowishList,ADDToCard} from '../actions/index'
import PropTypes from 'prop-types'
const Product =({name,image,price,AddtowishList,ADDToCard,wishlist,card}) =>{


 const UpdateWishlist = (value)=>{
  
 AddtowishList(value)
 }
 const updateCard = (value)=>{
  ADDToCard(value)
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
                  <button onClick={()=>UpdateWishlist(name)}> 
                  <BsPlusLg  />
                  <span>
                    &nbsp; card
                  </span>
                  </button>
              </Col>
              <Col>
                 <div className='rtl' onClick={()=>updateCard(name)}>
                   <span>
                    Wishlist
                   </span>
                   &nbsp;
                   <BsHeart  />
                  </div>

              </Col>
          
          {/* <div></div> */}
           </Row>
          </div>
      </div>
   </div>
    )
}
Product.propTypes=({
  AddtowishList:PropTypes.func.isRequired,
  ADDToCard:PropTypes.func.isRequired,
  wishlist:PropTypes.array,
  card:PropTypes.array
})


const mapStateToProps = state=>{
  return {wishlist:state.wishlist,
      card:state.card
  }}

export default connect(null,{AddtowishList, ADDToCard})(Product)