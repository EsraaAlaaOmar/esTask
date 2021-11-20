import React from "react";
import { connect } from "react-redux";
import {Container,Row,Col} from 'react-bootstrap'
import{BsHeart,BsPlusLg}from "react-icons/bs"
import products from "../data";
import {AddtowishList,ADDToCard} from '../actions/index'
import PropTypes from 'prop-types'


import Slider from "./Slider";
const Product =({name,image,fImage,secImage,thirImage,price,AddtowishList,ADDToCard,wishlist,card}) =>{


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
          {/* <img  src={image} /> */}
          <Slider fImage={fImage} secImage={secImage} thirImage={thirImage}/>
          <br />
          <span className='price'>${price} </span>
          <div className='action'>
            <Row>
              <Col>
                  <div className='click' onClick={()=>updateCard(name)}> 
                  <BsPlusLg  />
                  <span>
                    &nbsp; card
                  </span>
                  </div>
              </Col>
              <Col>
                 <div className='rtl click' onClick={()=>UpdateWishlist(name)}>
                   <span  >
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