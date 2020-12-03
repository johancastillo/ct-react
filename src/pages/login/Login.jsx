import React from 'react';
import './Login.scss';

// Logo
import Logo from './logo.svg';

// Link
import {Link} from 'react-router-dom';

const Login = () => (
    <div className="container">
        <div className="row justify-content-center abs-center">

        <Link to="/">
            <div className="row justify-content-center">
                <img src={Logo} alt="logo"
                style={{
                    width: "220px",
                    marginTop: "64px",
                    marginBottom: "24px"
                }} 
                />
            </div>    
        </Link>

        <form className="mt-5 mb-5">
            <div class="form-group row">
                <div className="col-2 pr-0">
                    <span className="icon icon-user"
                    style={{
                        textAlign: "center"
                    }}></span>
                </div>
                <div className="col-10 pl-0">
                    <input type="email" class="form-control" 
                    placeholder="Usuario o correo electrónico" />
                </div>                        
            </div>

            <div class="form-group row">
                <div className="col-2 pr-0">
                    <span className="icon icon-padlock"
                    style={{
                        textAlign: "center"
                    }}></span>
                </div>
                <div className="col-10 pl-0">
                    <input type="password" class="form-control" 
                    placeholder="Contraseña" />
                </div>                        
            </div>
            
            <Link to="/reset-password">
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
                ¿No tienes cuenta?
                <br/>
                <Link to="/register">
                    <b className="text-primary text-uppercase">
                        Regístrate
                    </b>
                </Link>    
            </p>

            <div className="my-5 ">
                <p className="text-center mb-4">
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
            </div>
            
        </form>

        
            
        
        </div>
    </div>
);

export default Login;