import React from "react";
import { Carousel } from "react-bootstrap";
const Slider =({fImage,secImage,thirImage})=>{


return (
    <>

<Carousel interval={null}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fImage}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={secImage}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={thirImage}
      alt="First slide"
    />

  </Carousel.Item>
  
</Carousel>


    </>
)
}
export default Slider