import { ADD_PRODUCT } from "../actions/types"
import products from "../data"


export default (state=products,action)=>{
  switch(action.type){  
    case ADD_PRODUCT :
       
        return [...state,action.payload]
    default:
        return state
  }
}