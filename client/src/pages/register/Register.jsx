import React from 'react'
import "./register.css"
import {useRef} from "react"
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
export default function Register() {
const username=useRef();
const email = useRef();
const password = useRef();
const passwordAgain = useRef();
const history=useNavigate();

const handleClick=async(e)=>{
    e.preventDefault();
    if(passwordAgain.current.value!== password.current.value)
    {
        passwordAgain.current.setCustomValidity("Passwords don't match");
    }else{
        const user={
            username:username.current.value,
            email:email.current.value,
            password:password.current.value,
        }
        try{
           await axios.post("/auth/register",user);
           
            history("/login")
        }
        catch(err)
        {
           console.log(err);
        }
        
    }
}


  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginlogo">Mismatched</h3>
                <span className="loginDesc">
                    Connect with friends ans the world around you on Mismatched.
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                <input placeholder='Username' ref={username} required className="loginInput" />
                    <input placeholder='Email' type='email' ref={email} required className="loginInput" />
                    <input placeholder='Password' type='password' ref={password} required className="loginInput" minLength="6" />
                    <input placeholder='Password Again' type='password' ref={passwordAgain} required className="loginInput"  minLength="6" />
                    <button className="loginButton"type="submit">Sign Up</button>
                    
                    <button className="loginRegisterButton">Log Into your account</button>
                </form>
            </div>
        </div>
    </div>
  )
}
