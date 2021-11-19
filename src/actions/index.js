import { ADD_PRODUCT } from "./types"



export const AddNewProduct = (pdoduct_info)  => {
   
    console.log(pdoduct_info,'from actions')
    return{
        type:ADD_PRODUCT,
        payload: pdoduct_info
    }
 
}


const {name,price,fImage,secImage,thirImage,describtion}=pdoduct_info