import React, { Component } from 'react';

class ResetPassword extends Component{
    render(){
        return(
            <>
            <Link to="/login">
                <div>
                    <span className="icon icon-chevron-left text-left"></span>
                    <span className="text-left">Regresar</span>
                </div>
            </Link>

            <div className="container-fluid">
                <div className="row justify-content-center ">

                <h4 className="text-center text-uppercase text-primary mt-4">
                    <strong>Crear cuenta</strong>
                </h4>    

                <form className="mt-2 mb-5"
                style={{
                    width: "80%"
                }}>

                    <div class="form-group row">
                        <div className="col-2 pr-0">
                            <span className="icon icon-user"
                            style={{
                                textAlign: "center"
                            }}></span>
                        </div>

                        <div className="col-10 pl-0">
                            <input type="email" class="form-control" 
                            placeholder="Nombre y apellido" />
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
                            placeholder="Nombre de usuario" />
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
                            placeholder="Correo electrónico" />
                        </div>                        
                    </div>

                    <div class="form-group row">
                        <div className="col-2 pr-0">
                            <span className="icon icon-user"
                            style={{
                                textAlign: "center"
                            }}></span>
                        </div>

                        <div className="col-10 pl-0">
                            <input type="email" class="form-control" 
                            placeholder="Nombre y apellido" />
                        </div>                        
                    </div>

                    <div class="form-group row">
                        <div className="col-2 pr-0">
                            <span className="icon icon-user"
                            style={{
                                textAlign: "center"
                            }}></span>
                        </div>

                        <div className="col-10 pl-0">
                            <input type="email" class="form-control" 
                            placeholder="Nombre y apellido" />
                        </div>                        
                    </div>
                    

                    <div class="form-group form-check mt-5">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">
                            He leido y acepto los 
                            <Link to="terminos-y-condiciones">
                                Terminos y Condiciones.
                            </Link>
                        </label>
                    </div>
                    

                    <button type="button" 
                    class="btn btn-block btn-primary mt-4"
                    style={{
                        height: "48px",
                        textTransform: "uppercase",
                        fontWeight: "bold"
                    }}
                    >
                        Crear
                    </button>


                    
                </form>      
                </div>
            </div>
            </>
        )
    }
}