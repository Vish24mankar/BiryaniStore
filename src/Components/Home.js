import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import ConstData from '../Shared/ConstData';
import '../Components/Home.css'
import Button from 'react-bootstrap'; 
// import Card from 'react-bootstrap/Card';

// "json-server": "cd src/Database && json-server --watch -p 8888 db.json",
// "start-dev": "concurrently \" npm start\" \"npm run json-server\" ",
class Home extends Component {
    render() {
        return (
            <div>
                <br />
                <div className='Slider'>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img  height={560}
                            className="d-block w-100"
                            src={ConstData.Slider1}
                            alt="First slide"
                            /> 
                        </Carousel.Item>
                        <Carousel.Item>
                            <img  height={560}
                            className="d-block w-100"
                            src={ConstData.Slider5}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img height={560}
                            className="d-block w-100"
                            src={ConstData.Slider2}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img  height={560}
                            className="d-block w-100"
                            src={ConstData.Slider3}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img  height={560}
                            className="d-block w-100"
                            src={ConstData.Slider4}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>  
                </div>

                <br /><br /><br />
                {/* Popular Cuisines  */}

                {/* card */}
                <div className='container'>
                    <div class="card" className='card' style={{width:"25rem"}}>
                        <img src={ConstData.PaneerTikkaBiryani} class="card-img-top" alt="galleryimg" height={200} width={400} />
                        <div class="card-body">
                            <p class="card-text"><img src={ConstData.veg} height={20} width={20} />
                           
                            <b>Paneer-Tikka Biryani [1/2kKg]</b>
                            <span className='mPrice'><b>₹450</b></span> 
                            </p>
                            <p className='paratext'>
                            [Serve 1-2] BBK delivers both authentic taste of Hyderabadi (Kutchi) and Lucknowi (Pukki) Biryani prepared in individual earthen Handis with the freshest ingredients. Also the Kolkata Biryani which is a sub variant of Lucknowi Biryani.
                            </p>
                            <button className='obtn'>Order now</button> 
                        </div>
                    </div>

                    <div class="card" className='card' style={{width:"25rem"}}>
                        <img src={ConstData.LucknowimuttonBiryani} class="card-img-top" alt="galleryimg" height={200} width={400} />
                        <div class="card-body">
                            <p class="card-text"><img src={ConstData.nonVeg} height={16} width={16} />&nbsp; &nbsp; &nbsp; 
                            <b>Prawn Biryani [1kKg]</b>
                            <span className='mPrice'><b>₹900</b></span> 
                            </p>
                            <p className='paratext'>
                            [Serve 1-2] BBK delivers both authentic taste of Hyderabadi (Kutchi) and Lucknowi (Pukki) Biryani prepared in individual earthen Handis with the freshest ingredients. Also the Kolkata Biryani which is a sub variant of Lucknowi Biryani.
                            </p>
                            <button className='obtn'>Order now</button> 
                        </div>
                    </div>

                    <div class="card" style={{width:"25rem"}}>
                        <img src={ConstData.PaneerTikkaBiryani} class="card-img-top" alt="galleryimg" height={200} width={400} />
                        <div class="card-body">
                            <p class="card-text"><img src={ConstData.veg} height={20} width={20} />
                            {/* &nbsp; &nbsp; &nbsp; &nbsp;  */}
                            <b>Paneer-Tikka Biryani [1/2kKg]</b>
                            <span className='mPrice'><b>₹450</b></span> 
                            </p>
                            <p className='paratext'>
                            [Serve 1-2] BBK delivers both authentic taste of Hyderabadi (Kutchi) and Lucknowi (Pukki) Biryani prepared in individual earthen Handis with the freshest ingredients. Also the Kolkata Biryani which is a sub variant of Lucknowi Biryani.
                            </p>
                            <button className='obtn'>Order now</button> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
