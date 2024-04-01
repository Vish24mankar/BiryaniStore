import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ConstData from '../Shared/ConstData'
class Carousels extends Component {
    
    render() {
        return (
            <div>
               <div className='slider' style={{marginTop:"5px"}}>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img height={500}
                            className="d-block w-100"
                            src={ConstData.Slider1}
                            alt="First slide"
                            widtht="450px"
                            /> 
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img height={500}
                            className="d-block w-100"
                            src={ConstData.Slider2}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img  height={500}
                            className="d-block w-100"
                            src={ConstData.Slider3}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img height={500}
                            className="d-block w-100"
                            src={ConstData.Slider2}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>  
            </div>
            </div>
        )
    }
}

export default Carousels
