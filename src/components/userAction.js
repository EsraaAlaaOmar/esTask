import React from "react";
import{BsHeart}from "react-icons/bs"
import{FiShoppingCart} from "react-icons/fi"
import {AiFillHeart} from "react-icons/ai"
import { connect } from "react-redux";
import card from "../reducers/card";
import PropTypes from 'prop-types'

 const UserAction = ({wishlist,card}) => {

const renderedwishlist=wishlist.map((w)=><div>  {w} </div>
)

const renderedCard=card.map((c)=><div>  {c} </div>)
 return(
     <>
      <div className='userAction'>
      <span>{card.length}</span>
          <AiFillHeart />
          &nbsp;
          &nbsp;
          <span>{wishlist.length}</span>
        
          <FiShoppingCart />
          <div className='list'>
          {renderedwishlist}
          </div>
          <div className='list'>
          {renderedCard}
          </div>
      </div>
         
     </>
 )
 }
 UserAction.propTypes=({
    wishlist:PropTypes.array,
    card:PropTypes.array
  })


const mapStateToProps = state=>{
    return {wishlist:state.wishlist,
        card:state.card
    }}
 export default connect(mapStateToProps)(UserAction)