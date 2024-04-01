import React, { Component } from 'react'
import './Footer.css';
import ConstData from '../Shared/ConstData';
class Footer extends Component {
  render() {
    return (
      <div className='footer'>
          <div className='firstRow'>
                    <p style={{color:"#FFB600",fontSize:"28px",fontWeight:500,fontStyle:"oblique",textAlign:"left"}}>Quick Links</p>
                    <div className='quicklink'> 
                          <i class="fa fa-arrow-right" aria-hidden="true"></i> 
                          <a href='Home.js'>Home</a>
                    </div>
                    <div className='quicklink'>
                          <i class="fa fa-arrow-right" aria-hidden="true"></i>  
                          <a href='About.js'>About</a>
                    </div>
                    <div className='quicklink'>
                          <i class="fa fa-arrow-right" aria-hidden="true"></i> 
                          <a href='Contact.js'>Contact us</a>
                    </div>
                    <div className='quicklink'>
                          <i class="fa fa-arrow-right" aria-hidden="true"></i> 
                          <a href='OrderOnline.js'>Order_Online</a>
                    </div>
                    <div className='quicklink'>
                          <i class="fa fa-arrow-right" aria-hidden="true"></i> 
                          <a href='Unsubscribe.js'>Unsubsribe</a>
                    </div>
          </div>
          <div className='secondRow1'>
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
                        <br /><br /><br />
              <div>
                <p style={{color:"#FFB600",fontSize:"28px",fontWeight:500,fontStyle:"oblique",textAlign:"left"}}>Address : </p>
                    <span className='add' style={{color:'white',fontSize:'18px'}}>
                        Xion Mall, Hinjawadi, Pune, Maharashtra 411057 <br />
                        Hours: Open 24 hours
                    </span>
              s</div>
            </div>
            <div className='thirdRow'> 
                <p style={{color:"#FFB600",fontSize:"28px",fontWeight:500,fontStyle:"oblique",textAlign:"left"}}>Contact Us </p>
                <div>
                    <span style={{color:"white",fontSize:"32px",fontFamily:"bold",fontWeight:700,marginRight:"50px"}}>Call </span>
                    <span style={{color:"#FFB600",fontSize:"24px",fontFamily:"bold",fontWeight:700,marginRight:"-2px"}}> +91 99770 03434 </span> 
                </div>
                <br /> <br />
                <div>
                  <p style={{color:"#FFB600",fontSize:"28px",fontWeight:500,fontStyle:"oblique",textAlign:"left"}}>Explore now on mobile </p>
                  <a href='https://play.google.com/store/apps/details?id=in.bbk.android&hl=en&pli=1'>
                      <img src={ConstData.Applink1} alt='applink1'/>
                  </a>
                  &nbsp;
                  <a href='https://apps.apple.com/in/app/biryani-by-kilo-order-online/id1106886101'>
                      <img src={ConstData.iPhonlink2} alt='iPhoneapplink'/>
                  </a>
                </div>
            </div>
            {/* <div className='secondRow2'>
                <p style={{color:"#FFB600",fontSize:"28px",fontWeight:500,fontStyle:"oblique",textAlign:"left"}}>Address : </p>
                    <span className='add' style={{color:'white',fontSize:'18px'}}>
                        Xion Mall, Hinjawadi, Pune, Maharashtra 411057 <br />
                        Hours: Open 24 hours
                    </span>
            </div> */}
                      {/* <div class="socialmedia">
                            <a href="https://www.whatsapp.com/" target='blank'>
                              <i class="fa fa-whatsapp fa3"></i>
                            </a>  
                      </div> */}
                      {/* <div class="socialmedia">
                            <a href="https://www.instagram.com/" target='blank'>
                                <i class="fa fa-instagram fa3"></i>
                            </a>
                      </div>   */}
                      {/* <div class="socialmedia">
                            <a href="https://www.twitter.com/" target='blank'>
                              <i class="fa fa-twitter fa3"></i>
                            </a> 
                      </div>      */}
                    {/* </div> */}
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
                    </div>  */}

                {/* </div> */}
      </div>
    )
  }
}

export default Footer