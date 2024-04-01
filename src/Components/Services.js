import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import ConstData from '../Shared/ConstData'
class Services extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <div class="card" style={{width:"20rem",height:"21rem",marginLeft:"80px",marginRight:"30px"}}>
                    <img class="card-img-top" src={ConstData.Home_Delivery} alt="Card image cap" height="200px" width="50px" />
                        <div class="card-body">
                            <h5 class="card-title">Home Delivery</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
                <div class="card" style={{width:"20rem",height:"21rem",marginRight:"30px"}}>
                    <img class="card-img-top" src={ConstData.TakeWay} alt="Card image cap" height="200px" width="50px"/>
                        <div class="card-body">
                            <h5 class="card-title">Take & Away</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>  
                <div class="card" style={{width:"20rem",height:"21rem",marginRight:"30px"}}>
                    <img class="card-img-top" src={ConstData.Available_24_7} alt="Card image cap" height="200px" width="50px"/>
                        <div class="card-body">
                            <h5 class="card-title">24/7 Available</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
                <div class="card" style={{width:"20rem",height:"21rem",marginLeft:"80px",marginRight:"30px"}}>
                    <img class="card-img-top" src={ConstData.Fresh_Biryani} alt="Card image cap" height="200px" width="50px"/>
                        <div class="card-body">
                            <h5 class="card-title">100 % Fresh</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
                <div class="card" style={{width:"20rem",height:"21rem",marginRight:"30px"}}>
                    <img class="card-img-top" src={ConstData.COD} alt="Card image cap" height="200px" width="50px"/>
                        <div class="card-body">
                            <h5 class="card-title">Cash On Delivery Available</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
                <div class="card" style={{width:"20rem",height:"21rem",marginRight:"30px"}}>
                    <img class="card-img-top" src={ConstData.DiscountOffer} alt="Card image cap" height="200px" width="50px"/>
                        <div class="card-body">
                            <h5 class="card-title">Best Offers</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>

                {/* videos */}<br />
                {/* <div className='sVideoes'>
                    <p className='gTitle' style={{ marginRight: '66px',textAlign:"center"}}>Videos</p>
                    <div>
                        <video width="640" height="360" controls>
                            <source src={ConstData.ServiceBlog1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Services
