import React,{useState} from "react";
import{BsHeart}from "react-icons/bs"
import{FiShoppingCart} from "react-icons/fi"
import {MdOutlineExpandMore} from"react-icons/md"
import {AiFillHeart} from "react-icons/ai"
import { connect } from "react-redux";
import card from "../reducers/card";
import PropTypes from 'prop-types'

 const UserAction = ({wishlist,card}) => {
     const[showcard,setShowCard]=useState(false)
     const[showList,setShowList]=useState(false)


const renderedwishlist=wishlist.map((w)=><div className='listItem'>  {w} </div>
)

const renderedCard=card.map((c)=><div className='listItem'>  {c} </div>)

const onclickshowlist=()=>{
    setShowList(!showList);
    setShowCard(false);


}
const onclickCardList=()=>{
    setShowCard(!showcard);
    setShowList(false);
 
}

 return(
     <>
      <div className='userAction'>
      <span  onClick={onclickshowlist}>{wishlist.length} <MdOutlineExpandMore /> </span>
          <AiFillHeart />
          &nbsp;
          &nbsp;
          <span onClick={onclickCardList}>{card.length} <MdOutlineExpandMore/></span>
        
          <FiShoppingCart />
         { showList ? <div className='list'  >
             <div className="head">Wishlist</div>
          {renderedwishlist}
          </div> : ''}
          { showcard ? <div className='list' >
          <div className="head">Card List</div>
          {renderedCard}
          </div>
                 :'' }
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