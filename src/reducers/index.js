import {combineReducers} from 'redux'
 import addProductreducer from './add_product'
export default combineReducers ({
   
   
    products:addProductreducer,
    
})