import React from 'react';
import './Login.scss';

// Logo
import Logo from './logo.svg';

// Link
import {Link} from 'react-router-dom';

const Login = () => (
    <div className="container login">
        <div className="row justify-content-center abs-center">

        <Link to="/">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>    
        </Link>

        <form className="mt-5 mb-5">
            <div className="form-group row">
                <div className="col-2 pr-0">
                    <span className="icon icon-user"></span>
                </div>
                <div className="col-10 pl-0">
                    <input type="email" className="form-control" 
                    placeholder="Usuario o correo electrónico" />
                </div>                        
            </div>

            <div className="form-group row">
                <div className="col-2 pr-0">
                    <span className="icon icon-padlock"></span>
                </div>
                <div className="col-10 pl-0">
                    <input type="password" className="form-control" 
                    placeholder="Contraseña" />
                </div>                        
            </div>
            
            <Link to="/reset-password">
                <p className="text-right my-3">
                    ¿Olvidó la contraseña?
                </p>
            </Link>

            <button type="button" 
            className="btn btn-block btn-primary mt-4 btn-send">
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
                            <button type="button" className="btn btn-block btn-google">
                                
                                <span className="icon-google"></span>

                                <span>Google</span>
                            </button>
                        </div>
                        <div className="col-6">
                            <button type="button" className="btn btn-block btn-facebook">
                                <span className="icon-facebook"></span>
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