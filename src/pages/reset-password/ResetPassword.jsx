import React from 'react';
import { Link } from 'react-router-dom';


const ResetPassword = () => (
            <>
            <Link to="/login">
                <div>
                    <span className="icon icon-chevron-left text-left"></span>
                    <span className="text-left">Regresar</span>
                </div>
            </Link>

                <h4 className="text-center mt-5">
                    <span className="icon-padlock"
                    style={{
                        fontSize: "68px"
                    }}></span>

                    <p className="mt-2" 
                    style={{
                        fontSize: "20px"
                    }}>
                        Texto informativo
                    </p>
                </h4>    

            <div className="container-fluid my-5">
                <div className="row justify-content-center ">


                <form className="mt-2 mb-5"
                style={{
                    width: "80%"
                }}>

                    <div className="form-group row">
                        <div className="col-12">
                            <input type="email" className="form-control" 
                            placeholder="Correo eléctronico" />
                        </div>                        
                    </div>

                    
                    <button type="button" 
                    className="btn btn-block btn-primary mt-4"
                    style={{
                        height: "48px",
                        textTransform: "uppercase",
                        fontWeight: "bold"
                    }}
                    >
                        Recuperar contraseña
                    </button>


                    
                </form>      
                </div>
            </div>
            </>
);

export default ResetPassword;