import React, {Component} from 'react';
import './Login.css';

// Logo
import Logo from './logo.svg';

class Login extends Component{
    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                <img src={Logo} alt="logo" className="mt-4"
                style={{
                    width: "55%"
                }} 
                 />

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

                    <button type="button" 
                    class="btn btn-block btn-primary mt-4"
                    style={{
                        height: "44px",
                        textTransform: "uppercase",
                        fontWeight: "bold"
                    }}
                    >
                        Iniciar sesión
                    </button>

                    <div className="mt-4">
                        <div className="row">
                            <div className="col-6">
                                <button type="button" class="btn btn-block btn-google">
                                    Google
                                </button>
                            </div>
                            <div className="col-6">
                                <button type="button" class="btn btn-block btn-facebook">
                                    Facebook
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