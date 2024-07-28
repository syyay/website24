import React, { useEffect, useState } from 'react'
import "../../../Assets/bootstrap/css/bootstrap.min.css"
import './Login.css';
// import assetImage from "../../../Assets/image 1.jpeg"
import AxiosInstance from '../../../axios/AxiosInstance';
import { FaUser, FaLock } from "react-icons/fa";

function Login(){
    const token = localStorage.getItem("token");
    const [messageError, setMessageError] = useState();
    useEffect(()=>{
      if(token){
          AxiosInstance.get('/auth/cektoken',{
              headers:{
                  Authorization:'Bearer '+token
              }
          }).then(response=>{
              if(response.status){
                window.location.href = "/dashboard/daftarsiswa"
              }
          }).catch(err=>{ 
            return
          })
      }else{
          return
      }})
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

            {
              messageError ? 
              <div className='mb-3'>{messageError}</div>
              :
              <></>
            }

            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    )
}
export default Login;