import React, {Component, Fragment} from 'react';

class Register extends Component{
    render(){
        return(
            <Fragment>
            <div>
                <span className="icon icon-chevron-left text-left"></span>
                <span className="text-left">Regresar</span>
            </div>
            <div className="container">
                <div className="row justify-content-center">

                    <div>
                        <h2 className="text-center text-uppercase">
                            Crear cuenta
                        </h2>
                    </div>

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
                    
                    
                </form>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Register;