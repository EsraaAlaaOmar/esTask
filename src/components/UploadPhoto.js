import React from "react";
import { useState } from "react";
import axios from 'axios'

import {Col,Row } from "react-bootstrap";
const UploadPhoto=({name})=>{
const [ImageSelector,setImageSelector]=useState('')
    const uploadImage=(e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('file',ImageSelector)
        formData.append('upload_preset','ozqur3ms')
        axios.post('https://api.cloudinary.com/v1_1/djrm6ygpv/image/upload',formData).then((res)=>{
            console.log(res)
       //     setImageImageUrl(res.data.secure_url)
          

          
        })
        
    }
    return(
        <>

        <div className='firstImage info'> 
                    <label>{name}</label>
                    <br />
                    <Row>
                        <Col>
                            <input type='file'  onChange={e=>{setImageSelector( (e.target.files[0]))}}/>
                        </Col>  
                        <Col>
                        <button onClick={uploadImage}>upload</button>
                        </Col>    
                    </Row>
         </div>
        </>
    )
}
export default UploadPhoto