import { connect } from 'react-redux';
import React from "react";
import { useState } from 'react';
import { Container} from "react-bootstrap";
import { Link } from 'react-router-dom';
import UploadPhoto from "./UploadPhoto";
import {AddNewProduct} from '../actions/index'
import PropTypes from 'prop-types'

const AddProduct =({AddNewProduct}) =>{
    const[product,setProduct]=useState({
        name:'',
        price:'',
        fImage:'',
        secImage:'',
        thirImage:'',
        describtion:''
    })

    const {name,price,fImage,secImage,thirImage,describtion}=product
    const onChange=e=>setProduct({...product, [e.target.name]: e.target.value})

    function setFImg(newValue) {
        setProduct({...product,fImage: newValue})
        console.log()
      }


    function setSecImg(newValue) {
        setProduct({...product, secImage: newValue})
      
      }
    function setthirdImg(newValue) {
        setProduct({...product,thirImage: newValue})
      }    

    const onSubmit= e => {
        e.preventDefault()
        AddNewProduct(product)
       // console.log(product)
        
    }
    return (
   <> 
   <Container>
    <div className='add'>
       <Link to='/'>  products  </Link>
        <h5>Add a Product</h5>

       <form onSubmit = {e=>onSubmit(e)}> 
           <div className='info'>
            <label>Name</label>
            <br />
            <input type='text' name='name' onChange={e=>onChange(e)} />
           </div> 
           <div className='info'>
            <label>Price</label>
            <br />
            <input type='number' name='price'  onChange={e=>onChange(e)}/>
           </div>
           <div className='info'>
            <label>Describtion</label>
            <br />
            <textarea name='describtion' onChange={e=>onChange(e)}/>
           </div> 
           <UploadPhoto name="First Image" setImg={setFImg} />
           <UploadPhoto name="Second Image" setImg={setSecImg} />
           <UploadPhoto name="Third Image" setImg={setthirdImg} />
           <br/>
           <input type='submit' className='submit'/>

       </form>
    </div>
    </Container>  
    
   </> 
    )
}
AddProduct.propTypes=({
  AddNewProduct:PropTypes.func.isRequired
})

export default connect(null,{AddNewProduct})( AddProduct)