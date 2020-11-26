import React, {Component} from 'react';
import './Login.css';

// Logo
import Logo from './logo.svg';

// Link
import {Link} from 'react-router-dom';

class Login extends Component{
    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">

                <Link to="/">
                    <div className="row justify-content-center">
                        <img src={Logo} alt="logo"
                        style={{
                            width: "55%",
                            marginTop: "64px",
                            marginBottom: "24px"
                        }} 
                        />
                    </div>    
                </Link>

                <form className="mt-5">
                    <div class="form-group row">
                        <div className="col-2">
                            <span className="icon icon-user"></span>
                        </div>
                        <div className="col-10">
                            <input type="email" class="form-control" id="inputPassword" />
                        </div>                        
                    </div>

                    <div class="form-group row">
                        <div className="col-2">
                            <span className="icon icon-padlock"></span>
                        </div>
                        <div className="col-10">
                            <input type="email" class="form-control" id="inputPassword" />
                        </div>                        
                    </div>
                    
                    <Link to="/reset">
                        <p className="text-right my-3"
                        style={{
                            color: "#000"
                        }}>
                            ¿Olvidó la contraseña?
                        </p>
                    </Link>

                    <button type="button" 
                    class="btn btn-block btn-primary mt-4"
                    style={{
                        height: "48px",
                        textTransform: "uppercase",
                        fontWeight: "bold"
                    }}
                    >
                        Iniciar sesión
                    </button>

                    <p className="text-center my-4">
                        O inicia sesión con:
                    </p>

                    <div className="mt-4">
                        <div className="row">
                            <div className="col-6">
                                <button type="button" class="btn btn-block btn-google abs-center">
                                    <span className="icon-google" style={{
                                        fontSize: "25px"
                                    }}></span>

                                    <span>Google</span>
                                </button>
                            </div>
                            <div className="col-6">
                                <button type="button" class="btn btn-block btn-facebook abs-center">
                                    <span className="icon-facebook" style={{
                                        fontSize: "25px"
                                    }}></span>

                                    <span>Facebook</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

                
                    
                
                </div>
            </div>
        )
    }
}

export default Login;