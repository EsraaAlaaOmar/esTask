import {ADD_TOCARD} from '../actions/types'

export default (state=[],action)=>{
    switch(action.type){  
      case ADD_TOCARD:
         
          return [...state,action.payload]
      default:
          return state
    }
  }