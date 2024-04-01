import React, { Component } from 'react'
import '../Components/Footer.css';
class Foorer1 extends Component {
    render() {
        return (
            <div className='foot'>
                <p>footer part</p>
                <div className='firstRow'>
                    <p style={{color:"#FFB600",fontSize:"28px",fontWeight:500,fontStyle:"oblique",textAlign:"left"}}>Quick Links</p>
                    <div className='quicklink'>
                            <a href='Home.js'>Home</a>
                    </div>
                    <div className='quicklink'>
                            <a href='About.js'>About</a>
                    </div>
                    <div className='quicklink'>
                            <a href='Contact.js'>Contact us</a>
                    </div>
                    <div className='quicklink'>
                            <a href='OrderOnline.js'>Order_Online</a>
                    </div>
                    <div className='quicklink'>
                            <a href='Unsubscribe.js'>Unsubsribe</a>
                    </div>
                </div>
                <div className='secondRow'>
                    <p style={{color:"#FFB600",fontSize:"28px",fontWeight:500,fontStyle:"oblique",textAlign:"left"}}>Follow Us</p>
                    <div class="socialmedia">
                        <a href="https://www.facebook.com/" target='blank'>
                                <i class="fa fa-facebook-f fa3"></i>
                        </a>
                        <a href="https://www.whatsapp.com/" target='blank'>
                                <i class="fa fa-whatsapp fa3"></i>
                        </a>    
                        <a href="https://www.instagram.com/" target='blank'>
                                <i class="fa fa-instagram fa3"></i>
                        </a>
                        <a href="https://www.twitter.com/" target='blank'>
                                <i class="fa fa-twitter fa3"></i>
                        </a>      
                    </div>
                    <br />
                    <div>
                    <p style={{color:"#FFB600",fontSize:"28px",fontWeight:500,fontStyle:"oblique",textAlign:"left"}}>Address : </p>
                    <span className='add' style={{color:'white',fontSize:'18px'}}>
                    Xion Mall, Hinjawadi, Pune, Maharashtra 411057 <br />
                    Hours: Open 24 hours
                    </span>
                    

                    </div>
                    <br />
                    {/* <div class="socialmedia">
                            <i class="fa fa-facebook-f fa3"></i>
                    </div>
                    <div>
                            <i class="fa fa-whatsapp fa3"></i>
                    </div>
                    <div>
                            <i class="fa fa-instagram fa3"></i>
                    </div>
                    <div>
                            <i class="fa fa-twitter fa3"></i>
                    </div> */}

                </div>
            </div>

        )
    }
}

export default Foorer1
