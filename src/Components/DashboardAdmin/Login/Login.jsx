import React, { useState } from 'react'
import "../../../Assets/bootstrap/css/bootstrap.min.css"
import './Login.css';
// import assetImage from "../../../Assets/image 1.jpeg"
import AxiosInstance from '../../../axios/AxiosInstance';
import { FaUser, FaLock } from "react-icons/fa";

function Login(){
    const token = localStorage.getItem("token");
    const [messageError, setMessageError] = useState();
    const login = (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      AxiosInstance.post('/auth/login',{
        "username":username,
        "password":password
      }).then(response=>{
        console.log(response);
        localStorage.setItem("token",response.data.token);
        setMessageError(null);
        window.location.href = "/dashboard/daftarsiswa" 
      }).catch(err=>{
        setMessageError(err.response.data.message)
      });
    }

    return (
      <div className="xx">
        <div className="wrapper">
          <form onSubmit={login}>
            <h1>Admin Login</h1>
            <div className="input-box">
              <input type='text' id='username' placeholder='Masukkan Username' required />
              <FaUser className='icon' />
            </div>

            <div className="input-box">
              <input type='password' id='password' placeholder='Masukkan Password' required />
              <FaLock className='icon' />
            </div>

            <div className="remember-forgot">
              <label><input type='checkbox' />Remember me</label>
              <a href='#'>Forgot Password?</a>
            </div>

            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    )
}
export default Login;