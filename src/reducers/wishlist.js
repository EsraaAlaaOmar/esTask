
import { ADD_TOWISHLIST } from "../actions/types"



export default (state=[],action)=>{
  switch(action.type){  
    case ADD_TOWISHLIST:
     const  item=action.payload
      const existItem = state.find(i => i=== item)
      if (existItem){
        return [...state]
      }
      else {
        return [...state,action.payload]
      }
    default:
        return state
  }
}