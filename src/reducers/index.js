import {combineReducers} from 'redux'
 import addProductreducer from './add_product'
 import wishlist from './wishlist'
 import card from './card'
export default combineReducers ({
   
   
    products:addProductreducer,
    wishlist:wishlist,
    card:card
    
})