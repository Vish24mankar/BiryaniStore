import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/Login.css'
const Login = () => {
  const navigate = useNavigate();
  const [User, setUser] = useState({
    uEmail : '',
    uPassword : ''
  });

  const inputChangeHandler= (event) =>{
    setUser({...User,[event.target.name]:event.target.value});
  }

  const checkData = (event) =>{
    console.log(User.uEmail,User.uPassword);
    event.preventDefault();
    console.log(User.uEmail,User.uPassword);
    axios.get("http://localhost:8888/User1").then((res) =>{
      console.log(res.data);

    const data = res.data.filter((item) =>{
      return item.uEmail === User.uEmail && item.uPassword === User.uPassword})
      if(data.length > 0){
        navigate('/home');
        // useNavigate('/feedback');
        sessionStorage.setItem('isLogin',User.uEmail);
      }
      else{
        window.alert("Wrong Credential !!!");
        setUser({uEmail:'',uPassword:''});
      }
    })
  }
  return (
    <div className='mainUser'>
        <form className='myForm' onSubmit={checkData}>
        <p className='gTitle' style={{ marginRight: '66px',textAlign:"center"}}>&nbsp;&nbsp;&nbsp; Sign In</p>
        <br />
        <div>
                <label className='t1'>Email Address </label> <br />
                <input
                type='email'
                name='uEmail'
                value={User.uEmail}
                onChange={inputChangeHandler}
                required
                />
                <br /><br />
                <label className='t2'>Password</label> <br />
               <input
                type='password'
                name='uPassword'
                value={User.uPassword}
                onChange={inputChangeHandler}
                required
                />
                <br /> <br />
              <button type='submit' className='sbtn'>Login</button>     
                <br /><br />
                    Don't have an account yet? &nbsp;
                    <a href='sign_up'>Create Account</a> 
                    <br /><br />
                    <a href='resetPass'>Forget your password?</a> <br />
                <br />
          </div>
        </form>
    </div>
  )
}

export default Login;

// import axios from 'axios';
// import React, { Component } from 'react'

// class Login extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         User: [],
//         uEmail:"",
//         uPassword:""
//       }
//     }
//     Chnageinput = (e) =>{
//         const {name,value} = e.target;
//         this.setState({ [name] : value});
//     }

//     submitform = () =>{
//         axios.get("http://localhost:8888/User").then((res) =>{
//             const isUser = res.data.some( d => d.uEmail === this.state.uEmail && d.uPassword === this.state.uPassword)
//             if(isUser){
//                 sessionStorage.setItem("isLogin" , "true");
//                 // window.alert("login successfully")
//                 // window.alert(JSON.stringify(isuser));
//                 this.props.router.navigate('/gallery');
//             }
//             else {
//                 window.alert("Not correct password")
//             }
//         });
//     }
//     render() {
//     const {uEmail, uPassword} = this.state;
//     return (
//       <div className='container mt-5'>
        
//         <form onClick={this.submitform} style={{border:"2px solid black",width:"300px",padding:"15px",}}>
//         <p className='gTitle' style={{ marginRight: '66px',textAlign:"center"}}>Login to BBK</p>
            // <div>
            //     <input
            //     type='text'
            //     name='uEmail'
            //     value={uEmail}
            //     placeholder='email'
            //     onChange={this.Chnageinput}
            //     required
            //     />
            //     <br /><br />
            //    <input
            //     type='text'
            //     name='uPassword'
            //     value={uPassword}
            //     placeholder='Password'
            //     onChange={this.Chnageinput}
            //     required
            //     />
            //     <br />
            //         <a href='resetPass'>Forget account?</a> <br />
            //         <a href='sign_up'>Create an Account</a> 
                    
            //     <br />
            //     <button type='button' onClick={this.submitform} className='btn btn-primary my-2'>Login</button>

//             </div>
//         </form>

//       </div>
//     )
//   }
// }

// export default Login