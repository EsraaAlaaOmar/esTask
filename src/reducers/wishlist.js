
import { ADD_TOWISHLIST } from "../actions/types"



export default (state=[],action)=>{
  switch(action.type){  
    case ADD_TOWISHLIST:
       
        return [...state,action.payload]
    default:
        return state
  }
}