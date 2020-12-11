import React from 'react';
import './Login.scss';

import banner from './banner.png';

// Logo
import logo from './logo.svg';
// Link
import {Link} from 'react-router-dom';

const Login = () => (
   <>
    <div className="login container mt-md-5 mb-5">
        <div className="row">
            
            {/* Banner */}
            <div className="col-md-5 p-0 banner-login">
                <img src={banner} alt="" />
            </div>
           
            {/* Form */}
            <div className="col-md-7 pl-0 form">

                {/* Logo */}
                <div className="logo mt-5">
                    <img src={logo} alt="" />
                </div>

                {/* Inputs */}
                <div className="container">
                    <div className="inputs mt-5">
                        <div className="form-group row">

                            <div className="col-2 pr-0 icon">
                                <span className="icon-user"></span>
                            </div>

                            <div className="col-10 pl-0">
                                <input type="email" className="form-control" 
                                placeholder="Usuario o correo electrónico" />
                            </div>

                        </div>

                        <div className="form-group row">

                            <div className="col-2 pr-0 icon">
                                <span className="icon-padlock"></span>
                            </div>

                            <div className="col-10 pl-0">
                                <input type="password" className="form-control" 
                                placeholder="Contraseña" />
                            </div> 

                        </div>
                    </div>
                </div>

                {/*  */}

            </div>
        </div>
    </div>
   </>
);

export default Login;