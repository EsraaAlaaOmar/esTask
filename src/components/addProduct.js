import React from "react";
import { Container} from "react-bootstrap";

import UploadPhoto from "./UploadPhoto";
const AddProduct =() =>{
    return (
   <> 
   <Container>
    <div className='add'>
        <h5>Add a Product</h5>

       <form>
           <div className='info'>
            <label>Name</label>
            <br />
            <input type='text' />
           </div> 
           <div className='info'>
            <label>Price</label>
            <br />
            <input type='number' />
           </div>
           <div className='info'>
            <label>Describtion</label>
            <br />
            <textarea />
           </div> 
           <UploadPhoto name="First Image" />
           <UploadPhoto name="Second Image"  />
           <UploadPhoto name="Third Image" />
           <br/>
           <input type='submit' className='submit'/>

       </form>
    </div>
    </Container>  
    
   </> 
    )
}

export default AddProduct