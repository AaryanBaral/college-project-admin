import React from 'react'
import { useState } from 'react'
import logo from "../images/VVC Logo.png"
import baseApi from '../utils/baseApi';
import { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate ,Navigate } from "react-router-dom";
import { UserContext } from '../components/Providers/UserProvider';
import getToken from '../utils/getToken';

export default function Login() {
    const { isUserLoggedIn, loginUser } = useContext(UserContext);
    const navigate = useNavigate();

    const [loginInfo, setloginInfo] = useState({
        email:"",
        password:""
    });
    const handelOnChange = (e)=>{
        setloginInfo((prev)=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }
    const handleLogin = async(e)=>{
        e.preventDefault();
        
        if (loginInfo.email === "" || loginInfo.password === "") {
            return toast.error("fill the form please");
        }
        try{
            console.log("inside login")
            const res = await baseApi.post(`/adminLogin`, {
                email: loginInfo.email,
                password: loginInfo.password,
              });
              console.log(res);
              
              if(res.status === 200){
                console.log("message ------------>"+res.data.message)
                localStorage.setItem('token', res.data.message);
                console.log(getToken());
                toast.success("Login Successfull");
                loginUser();
                navigate("/", {replace:true});
              }


        }catch(err){
            console.log(err);
            toast.error("LOGIN CREDENTIALS DID'NT MATCH");
        }
        if (isUserLoggedIn) return <Navigate to="/" replace />;
    }
  return (
    <div id='login'>
        <div id="login-box">
            <div id="logo">
                <img src= {logo} alt="" />
            </div>
            <form action="">
                <div className="input-box">
                    <p>Email:</p>
                    <input type="email" onChange={handelOnChange}  value={loginInfo.email} name='email' placeholder='Enter admin email'/>
                </div>
                <div className="input-box">
                    <p>Password:</p>
                    <input type="password" onChange={handelOnChange} value={loginInfo.password} name='password' placeholder='Enter admin password'/>
                </div>
                <div className="button">
                    <button onClick={handleLogin}>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}
