import React from 'react'
import logo from "../images/VVC Logo.png"

export default function Login() {
  return (
    <div id='login'>
        <div id="login-box">
            <div id="logo">
                <img src= {logo} alt="" />
            </div>
            <form action="">
                <div className="input-box">
                    <p>Email:</p>
                    <input type="email" />
                </div>
                <div className="input-box">
                    <p>Password:</p>
                    <input type="password" />
                </div>
                <div className="button">
                    <button>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}
