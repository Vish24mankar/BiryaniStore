import React from 'react';
import ConstData from '../Shared/ConstData';
import '../Components/Navcomponent.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Navcomponent = () => {
    const navigate = useNavigate();
    const isLoggedIn = sessionStorage.getItem('isLogin');

    const handleLogout = () => {
        if (window.confirm('Are you sure to Logout!!!')) {
            sessionStorage.removeItem('isLogin');
            navigate('/');
        }
    };

    return (
        <div className='main'>
            <div className='bbkLogo'>
                <a href=''><img src={ConstData.bblogo} /></a>
                <span className='logot1'>Biryani By Kavya</span>    
            </div>
            
            <div className='nav-menu'>
                <Link to='/home'  >Home</Link>  &nbsp;
                <Link to='about'>About</Link>   &nbsp;
                <Link to='gallery'>Gallery</Link>   &nbsp;
                <Link to='services'>Services</Link>
                <Link to='contact'>Contact us</Link>
                <Link to='feedback1'>Feedback</Link>
                <Link to='feedback1'></Link>    
                <Link to='menu'>Menu Dashboard</Link>
                {/* <Link to='' ></Link> */}
            </div>

            {isLoggedIn ? (
                <div className='loginBtn' style={{marginRight:"15px"}}>
                    <button type='button' className="btn btn-primary" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            ) : (
                <div className='loginBtn' style={{marginRight:"15px"}}>
                    <Link to='login'>
                        <i className="fa fa-user" aria-hidden="true">&nbsp; Login</i>
                    </Link>
                </div>
            )} 
        </div>
    );
};

export default Navcomponent;
