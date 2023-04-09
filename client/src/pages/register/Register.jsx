import React from 'react'
import "./register.css"
export default function Register() {
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
                <div className="loginBox">
                <input placeholder='Username' className="loginInput" />
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='Password' className="loginInput" />
                    <input placeholder='Password Again' className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    
                    <button className="loginRegisterButton">Log Into your account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
