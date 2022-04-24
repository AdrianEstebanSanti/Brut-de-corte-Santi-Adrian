import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

 
 function CarouselWine() {
   return (
     
       <Carousel className='mb-4'>
          <Carousel.Item>
          <img 
            className="imagenCarro d-block w-100  "
            src="https://i.postimg.cc/G2QnN2H5/zan-Wrue-FKp-Tl-Qs-unsplash-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className='text-dark fw-bold'>
            <h3>Descubrí una nueva forma de tienda</h3>
            <p>Entra y hacé un regalo único.</p>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="imagenCarro d-block w-100"
              src="https://i.postimg.cc/yxKRnLwH/scott-warman-h4-AGlo55t-TA-unsplash-1.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
  
      </Carousel>

   )
 }
 
 export default CarouselWine

