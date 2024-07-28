import React, { useState } from 'react'
import "../../../Assets/bootstrap/css/bootstrap.min.css"
import assetImage from "../../../Assets/image 1.jpeg"
import AxiosInstance from '../../../axios/AxiosInstance';

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
        <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black mt-5">
      
              <div className="px-5 ms-xl-4">
                <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }}></i>
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>
      
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
      
                <form style={{ width: '23rem' }} onSubmit={login}>
      
                  <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
      
                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input type="username" id="username" className="form-control form-control-lg" required/>
                  </div>
      
                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control form-control-lg" required/>
                  </div>
                  {
                    messageError ? 
                      <div className='bg-danger p-3 text-light my-3'>{messageError}</div>
                    :
                    <></>
                  }
      
                  <div className="pt-1 mb-4">
                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-info btn-lg btn-block text-light" type="submit">Login</button>
                  </div>
                </form>
              </div>
      
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img src={assetImage} alt="Login image" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'left' }}/>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Login;