import { ADD_PRODUCT , ADD_TOWISHLIST,ADD_TOCARD} from "./types"



export const AddNewProduct = (pdoduct_info)  => {
    return{
        type:ADD_PRODUCT,
        payload: pdoduct_info
    }
 
}

export const AddtowishList = (name)  => {
    return{
        type:ADD_TOWISHLIST,
        payload: name
    }
 
}

export const ADDToCard = (name)  => {
    return{
        type:ADD_TOCARD,
        payload: name
    }
 
}
