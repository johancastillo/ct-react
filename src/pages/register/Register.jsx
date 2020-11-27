import React, {Component, Fragment} from 'react';

import {Link} from 'react-router-dom';

class Register extends Component{
    render(){
        return(
            <Fragment>
            <Link to="/login">
                <div>
                    <span className="icon icon-chevron-left text-left"></span>
                    <span className="text-left">Regresar</span>
                </div>
            </Link>

            <div className="container">
                <div className="row justify-content-center abs-center">

                

                <form className="mt-5 mb-5">
                    <div class="form-group row">
                        <div className="col-2 pr-0">
                            <span className="icon icon-user"
                            style={{
                                textAlign: "center"
                            }}></span>
                        </div>
                        <div className="col-10 pl-0">
                            <input type="email" class="form-control" />
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
                            <input type="password" class="form-control" />
                        </div>                        
                    </div>
                    
                    

                    <button type="button" 
                    class="btn btn-block btn-primary mt-4"
                    style={{
                        height: "48px",
                        textTransform: "uppercase",
                        fontWeight: "bold"
                    }}
                    >
                        Crear cuenta
                    </button>


                    

                    <p className="text-uppercase text-center mt-5">
                        ¿No tienes cuenta?
                        <br/>
                        <Link to="/register">
                            <b className="text-primary">
                                Regístrate
                            </b>
                        </Link>    
                        </p>
                    
                </form>      
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Register;